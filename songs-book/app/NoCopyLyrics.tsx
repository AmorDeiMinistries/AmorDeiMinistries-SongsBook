"use client"

import { useEffect, useRef } from "react"

export default function NoCopyLyrics({ lyrics }: { lyrics: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const fitLines = () => {
      const lines = container.querySelectorAll<HTMLSpanElement>(".lyric-line")
      const containerWidth = container.clientWidth

      lines.forEach((line) => {
        line.style.fontSize = ""
        const computedSize = parseFloat(getComputedStyle(line).fontSize)
        const naturalWidth = line.scrollWidth

        if (naturalWidth > containerWidth) {
          const scale = containerWidth / naturalWidth
          line.style.fontSize = `${computedSize * scale}px`
        }
      })
    }

    fitLines()
    const observer = new ResizeObserver(fitLines)
    observer.observe(container)
    return () => observer.disconnect()
  }, [lyrics])

  const lines = lyrics.split("\n")

  return (
    <div
      ref={containerRef}
      className="no-copy w-full"
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {lines.map((line, i) => {
        const isEmpty = line.trim() === ""
        const isChorus =
          line.trim().startsWith("||") ||
          line.trim().startsWith("॥") ||
          line.trim().startsWith("∥")

        return (
          <span
            key={i}
            className={`lyric-line block whitespace-nowrap text-center ${
              isEmpty
                ? "h-6"
                : isChorus
                ? "font-body font-bold text-blue-600 dark:text-blue-400"
                : "font-body font-medium text-zinc-900 dark:text-zinc-100"
            }`}
            style={{
              fontSize: isEmpty ? undefined : "1.7rem",
              lineHeight: isEmpty ? undefined : "2.15",
              letterSpacing: "0.01em",
            }}
          >
            {isEmpty ? "\u00A0" : line}
          </span>
        )
      })}
    </div>
  )
}
