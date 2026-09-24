"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1];
const MORPH = { type: "spring", duration: 0.5, bounce: 0.12 };

const noopSubscribe = () => () => {};
const useIsClient = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

const formatDuration = (seconds) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delayChildren: 0.12, staggerChildren: 0.06 },
  },
};

const mediaVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

function PlayIcon({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15l13-7.5z" />
    </svg>
  );
}

function ExpandIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4.5" width="4" height="15" rx="1" />
      <rect x="14" y="4.5" width="4" height="15" rx="1" />
    </svg>
  );
}

function VolumeIcon({ muted }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      {muted ? (
        <>
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </>
      ) : (
        <>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </>
      )}
    </svg>
  );
}

const PLAYER_BUTTON =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white outline-none transition-[background-color,scale] duration-150 ease-out hover:bg-white/15 active:scale-[0.94] focus-visible:ring-2 focus-visible:ring-white";

// Custom controls instead of the native bar: once focus enters Chrome's built-in
// controls, key events stop reaching the page, so Escape and the focus trap break.
function VideoModal({ layoutId, title, src, poster, onClose, initialFocusRef }) {
  const dialogRef = useRef(null);
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const seekRef = useRef(null);
  const timeRef = useRef(null);
  const scrubbing = useRef(false);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  // Seek bar and clock follow playback without re-rendering.
  const sync = useCallback(() => {
    const video = videoRef.current;
    const seek = seekRef.current;
    if (!video || !seek) return;
    const total = video.duration || 0;
    seek.max = String(total);
    if (!scrubbing.current) seek.value = String(video.currentTime);
    seek.style.setProperty("--p", `${total ? (video.currentTime / total) * 100 : 0}%`);
    if (timeRef.current) {
      timeRef.current.textContent = `${formatDuration(video.currentTime)} / ${formatDuration(total)}`;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Opened by a click, so sound is allowed. Fall back to muted if the browser still refuses.
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    let raf = 0;
    const tick = () => {
      sync();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, sync]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) video.muted = !video.muted;
  };

  const seekTo = (event) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Number(event.target.value);
    sync();
  };

  const toggleFullscreen = () => {
    const frame = frameRef.current;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else if (frame?.requestFullscreen) frame.requestFullscreen().catch(() => {});
    else videoRef.current?.webkitEnterFullscreen?.();
  };

  // Keep Tab inside the dialog.
  const trapFocus = (event) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const items = Array.from(dialogRef.current.querySelectorAll("button, input"));
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <motion.div
      ref={dialogRef}
      layoutRoot
      role="dialog"
      aria-modal="true"
      aria-label={`${title} video`}
      onKeyDown={trapFocus}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 p-4 sm:p-8"
    >
      <motion.div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2, ease: EASE_OUT } }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
      />

      <motion.div
        ref={frameRef}
        layoutId={layoutId}
        transition={MORPH}
        initial={layoutId ? undefined : { opacity: 0 }}
        animate={layoutId ? undefined : { opacity: 1 }}
        exit={layoutId ? undefined : { opacity: 0 }}
        data-paused={paused}
        className="group/player relative aspect-video overflow-hidden bg-black shadow-2xl [&:fullscreen]:rounded-none!"
        style={{ borderRadius: 16, width: "min(64rem, 100%, calc((100dvh - 9rem) * 16 / 9))" }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          onClick={togglePlay}
          onPlay={() => setPaused(false)}
          onPause={() => {
            setPaused(true);
            sync();
          }}
          onLoadedMetadata={sync}
          onSeeked={sync}
          onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
          className="h-full w-full cursor-pointer"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/30 to-transparent px-2 pb-2 pt-12 opacity-0 transition-opacity duration-200 ease-out group-focus-within/player:opacity-100 group-hover/player:opacity-100 group-data-[paused=true]/player:opacity-100 sm:px-3 sm:pb-3">
          <div className="pointer-events-none flex items-center gap-1 group-focus-within/player:pointer-events-auto group-hover/player:pointer-events-auto group-data-[paused=true]/player:pointer-events-auto sm:gap-2">
            <button
              ref={initialFocusRef}
              type="button"
              onClick={togglePlay}
              aria-label={paused ? "Play" : "Pause"}
              className={PLAYER_BUTTON}
            >
              {paused ? <PlayIcon size={15} /> : <PauseIcon />}
            </button>
            <input
              ref={seekRef}
              type="range"
              min="0"
              step="0.01"
              defaultValue="0"
              aria-label="Seek"
              onChange={seekTo}
              onKeyDown={(event) => {
                // Arrow keys jump 5 seconds; the fine step is only for dragging.
                const video = videoRef.current;
                if (!video || (event.key !== "ArrowRight" && event.key !== "ArrowLeft")) return;
                event.preventDefault();
                const delta = event.key === "ArrowRight" ? 5 : -5;
                video.currentTime = Math.min(Math.max(video.currentTime + delta, 0), video.duration || 0);
                sync();
              }}
              onPointerDown={() => {
                scrubbing.current = true;
              }}
              onPointerUp={() => {
                scrubbing.current = false;
              }}
              className="h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-transparent [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              style={{
                "--p": "0%",
                background: "linear-gradient(to right, #fff var(--p), rgba(255, 255, 255, 0.3) var(--p))",
              }}
            />
            <span
              ref={timeRef}
              className="hidden shrink-0 px-1 font-mono text-xs tabular-nums text-white/85 sm:inline"
            >
              0:00 / 0:00
            </span>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className={PLAYER_BUTTON}
            >
              <VolumeIcon muted={muted} />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Full screen"
              className={PLAYER_BUTTON}
            >
              <ExpandIcon size={15} />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="relative text-sm font-medium text-white/80"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.4, ease: EASE_OUT } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        {title}
      </motion.p>

      <motion.button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.3, ease: EASE_OUT } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </motion.button>
    </motion.div>
  );
}

function BragVideo({ slug, title, src, poster, duration }) {
  const reduced = useReducedMotion();
  const isClient = useIsClient();
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const triggerRef = useRef(null);
  const initialFocusRef = useRef(null);
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const layoutId = reduced ? undefined : `brag-video-${slug}`;

  // Progress bar tracks playback every frame, written straight to the DOM.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const el = videoRef.current;
      if (el && el.duration && barRef.current) {
        barRef.current.style.transform = `scaleX(${el.currentTime / el.duration})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    initialFocusRef.current?.focus({ preventScroll: true });
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    // Capture phase: native video controls swallow Escape before it bubbles.
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open, close]);

  // Preview only for a real mouse hover. Touch and keyboard go straight to the enlarged view.
  const startPreview = (event) => {
    if (event.pointerType !== "mouse" || reduced || open) return;
    setActive(true);
    videoRef.current?.play().catch(() => {});
  };

  const stopPreview = (event) => {
    if (event.pointerType !== "mouse") return;
    setActive(false);
    videoRef.current?.pause();
  };

  const expand = () => {
    videoRef.current?.pause();
    setActive(false);
    setPlaying(false);
    setOpen(true);
  };

  return (
    <div className="relative aspect-video w-full">
      <button
        ref={triggerRef}
        type="button"
        onClick={expand}
        onPointerEnter={startPreview}
        onPointerLeave={stopPreview}
        data-active={active}
        aria-label={`Watch the ${title} video`}
        className="group/video absolute inset-0 block cursor-pointer rounded-xl outline-none transition-[scale,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] data-[active=true]:scale-[1.03] data-[active=true]:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.45)]"
      >
        {!open && (
          <motion.span
            layoutId={layoutId}
            transition={MORPH}
            className="absolute inset-0 block overflow-hidden bg-neutral-900"
            style={{ borderRadius: 12 }}
          >
            <video
              ref={videoRef}
              src={src}
              muted
              loop
              playsInline
              preload="metadata"
              tabIndex={-1}
              aria-hidden="true"
              onPlaying={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className={`object-cover transition-opacity duration-300 ease-out ${
                playing ? "opacity-0" : "opacity-100"
              }`}
            />

            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/45 to-transparent opacity-0 transition-opacity duration-300 group-data-[active=true]/video:opacity-100" />

            <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm transition-[opacity,translate,filter] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-[active=true]/video:translate-y-1 group-data-[active=true]/video:opacity-0 group-data-[active=true]/video:blur-[2px]">
              <PlayIcon />
              {formatDuration(duration)}
            </span>
            <span className="pointer-events-none absolute bottom-3 left-3 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-neutral-950 opacity-0 blur-[2px] transition-[opacity,translate,filter] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-[active=true]/video:translate-y-0 group-data-[active=true]/video:opacity-100 group-data-[active=true]/video:blur-none">
              <ExpandIcon />
              Click to expand
            </span>

            <span className="pointer-events-none absolute inset-x-0 bottom-0 block h-[3px] bg-white/25 opacity-0 transition-opacity duration-200 group-data-[active=true]/video:opacity-100">
              <span
                ref={barRef}
                className="block h-full origin-left bg-white"
                style={{ transform: "scaleX(0)" }}
              />
            </span>
          </motion.span>
        )}
      </button>

      {isClient &&
        createPortal(
          <AnimatePresence>
            {open && (
              <VideoModal
                key={slug}
                layoutId={layoutId}
                title={title}
                src={src}
                poster={poster}
                onClose={close}
                initialFocusRef={initialFocusRef}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

function ImageCarousel({ title, images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[3/2] w-full flex-shrink-0">
            <Image src={img} alt={`${title} preview ${i + 1}`} fill className="object-contain" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/60"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/60"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === current ? "scale-110 bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projectcard({ slug, title, role, images, projectimg, projectdesc, stack, video }) {
  const allImages = images && images.length > 0 ? images : projectimg ? [projectimg] : [];

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid rounded-2xl border border-[var(--line)] bg-white lg:grid-cols-[1.12fr_0.88fr]"
    >
      <motion.div
        variants={mediaVariants}
        className="flex items-center rounded-t-[15px] bg-[var(--background)] p-4 lg:rounded-l-[15px] lg:rounded-tr-none"
      >
        {video ? (
          <BragVideo slug={slug} title={title} {...video} />
        ) : allImages.length > 0 ? (
          <ImageCarousel title={title} images={allImages} />
        ) : null}
      </motion.div>

      <div className="flex flex-col justify-center p-6 lg:px-7 lg:py-6 xl:px-8 xl:py-7">
        {role && (
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
          >
            {role}
          </motion.p>
        )}
        <motion.h3
          variants={itemVariants}
          className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-neutral-950 lg:text-xl xl:text-[1.65rem]"
        >
          {title}
        </motion.h3>
        <motion.p variants={itemVariants} className="mt-3 text-[15px] leading-7 text-neutral-700 lg:text-sm lg:leading-6 xl:text-[15px] xl:leading-7">
          {projectdesc}
        </motion.p>
        {stack && stack.length > 0 && (
          <motion.ul variants={itemVariants} className="mt-5 flex flex-wrap gap-2 lg:mt-4 xl:mt-5" aria-label="Tech stack">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[var(--line)] bg-[var(--background)] px-2.5 py-1 text-xs font-medium text-neutral-600"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.article>
  );
}
