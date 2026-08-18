import React from "react";

export default function Sesen404() {
  return (
    <div className="sesen-404-page">
      <style>{`
        .sesen-404-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(75, 111, 216, 0.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(75, 111, 216, 0.08),
              transparent 30%
            ),
            #f5f8ff;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          color: #171717;
        }

        .sesen-404-page *,
        .sesen-404-page *::before,
        .sesen-404-page *::after {
          box-sizing: border-box;
        }

        .sesen-404-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          pointer-events: none;
        }

        .sesen-404-glow-left {
          left: -220px;
          top: 10%;
          background: rgba(75, 111, 216, 0.20);
        }

        .sesen-404-glow-right {
          right: -220px;
          bottom: 5%;
          background: rgba(75, 111, 216, 0.15);
        }

        .sesen-404-content {
          width: min(900px, calc(100% - 40px));
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 80px 30px;
        }

        .sesen-404-brand {
          margin-bottom: 48px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8a9bc8;
        }

        .sesen-404-number {
          margin: 0;
          font-size: clamp(130px, 20vw, 240px);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 800;
          background: linear-gradient(
            135deg,
            #1a2a5e 15%,
            #4B6FD8 55%,
            #7b9af0 95%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .sesen-404-title {
          margin: 42px 0 18px;
          font-size: clamp(30px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 750;
          color: #1a2a5e;
        }

        .sesen-404-description {
          max-width: 650px;
          margin: 0 auto;
          color: #5a6a8e;
          font-size: 17px;
          line-height: 1.75;
        }

        .sesen-404-error {
          max-width: 720px;
          margin: 32px auto 0;
          padding: 16px 20px;
          border: 1px solid rgba(75, 111, 216, 0.16);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            monospace;
          font-size: 13px;
          line-height: 1.6;
          color: #6a7a9e;
          word-break: break-word;
        }

        .sesen-404-error strong {
          color: #4B6FD8;
          font-weight: 600;
        }

        .sesen-404-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .sesen-404-button {
          appearance: none;
          border: 0;
          text-decoration: none;
          cursor: pointer;
          min-width: 150px;
          padding: 15px 25px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .sesen-404-button:hover {
          transform: translateY(-2px);
        }

        .sesen-404-primary {
          color: #fff;
          background: #4B6FD8;
          box-shadow: 0 10px 25px rgba(75, 111, 216, 0.30);
        }

        .sesen-404-primary:hover {
          background: #3a5abf;
          box-shadow: 0 14px 30px rgba(75, 111, 216, 0.38);
        }

        .sesen-404-secondary {
          color: #1a2a5e;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #c8d4ed;
        }

        .sesen-404-secondary:hover {
          background: #fff;
          box-shadow: 0 10px 25px rgba(75, 111, 216, 0.10);
        }

        .sesen-404-footer {
          margin-top: 58px;
          color: #8a9bc8;
          font-size: 12px;
        }

        @media (max-width: 640px) {
          .sesen-404-content {
            padding: 60px 20px;
          }

          .sesen-404-brand {
            margin-bottom: 35px;
          }

          .sesen-404-title {
            margin-top: 30px;
          }

          .sesen-404-description {
            font-size: 15px;
          }

          .sesen-404-error {
            font-size: 11px;
            text-align: left;
          }

          .sesen-404-button {
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>

      <div className="sesen-404-glow sesen-404-glow-left" />
      <div className="sesen-404-glow sesen-404-glow-right" />

      <main className="sesen-404-content">
        <div className="sesen-404-brand">Global Language Platform</div>

        <h1 className="sesen-404-number">404</h1>

        <h2 className="sesen-404-title">Page Not Found</h2>

        <p className="sesen-404-description">
          Sorry, the page you're looking for could not be loaded. The resource
          may have been moved, removed, or is currently unavailable.
        </p>

        <div className="sesen-404-error">
          <strong>Error:</strong> Failed to load resource:{" "}
          net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin
        </div>

        <div className="sesen-404-actions">
          <a href="/sesen/" className="sesen-404-button sesen-404-primary">
            Back to Home
          </a>

          <button
            type="button"
            className="sesen-404-button sesen-404-secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

        <div className="sesen-404-footer">
          Sesen · One Language. Infinite Possibilities.
        </div>
      </main>
    </div>
  );
}
