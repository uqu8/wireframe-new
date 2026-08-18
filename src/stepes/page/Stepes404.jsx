import React from "react";

export default function stepes404() {
  return (
    <div className="stepes-404-page">
      <style>{`
        .stepes-404-page {
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
              rgba(213, 37, 105, 0.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(66, 102, 255, 0.10),
              transparent 30%
            ),
            #fff9fb;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          color: #171717;
        }

        .stepes-404-page *,
        .stepes-404-page *::before,
        .stepes-404-page *::after {
          box-sizing: border-box;
        }

        .stepes-404-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          pointer-events: none;
        }

        .stepes-404-glow-left {
          left: -220px;
          top: 10%;
          background: rgba(194, 30, 100, 0.18);
        }

        .stepes-404-glow-right {
          right: -220px;
          bottom: 5%;
          background: rgba(46, 91, 255, 0.15);
        }

        .stepes-404-content {
          width: min(900px, calc(100% - 40px));
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 80px 30px;
        }

        .stepes-404-brand {
          margin-bottom: 48px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9a9a9a;
        }

        .stepes-404-number {
          margin: 0;
          font-size: clamp(130px, 20vw, 240px);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 800;
          background: linear-gradient(
            135deg,
            #161616 15%,
            #bd1e67 55%,
            #416eff 95%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stepes-404-title {
          margin: 42px 0 18px;
          font-size: clamp(30px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 750;
        }

        .stepes-404-description {
          max-width: 650px;
          margin: 0 auto;
          color: #686868;
          font-size: 17px;
          line-height: 1.75;
        }

        .stepes-404-error {
          max-width: 720px;
          margin: 32px auto 0;
          padding: 16px 20px;
          border: 1px solid rgba(190, 30, 103, 0.14);
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
          color: #777;
          word-break: break-word;
        }

        .stepes-404-error strong {
          color: #bd1e67;
          font-weight: 600;
        }

        .stepes-404-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .stepes-404-button {
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

        .stepes-404-button:hover {
          transform: translateY(-2px);
        }

        .stepes-404-primary {
          color: #fff;
          background: #bd1e67;
          box-shadow: 0 10px 25px rgba(189, 30, 103, 0.22);
        }

        .stepes-404-primary:hover {
          background: #a9195b;
          box-shadow: 0 14px 30px rgba(189, 30, 103, 0.28);
        }

        .stepes-404-secondary {
          color: #1d1d1d;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #dedede;
        }

        .stepes-404-secondary:hover {
          background: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
        }

        .stepes-404-footer {
          margin-top: 58px;
          color: #a0a0a0;
          font-size: 12px;
        }

        @media (max-width: 640px) {
          .stepes-404-content {
            padding: 60px 20px;
          }

          .stepes-404-brand {
            margin-bottom: 35px;
          }

          .stepes-404-title {
            margin-top: 30px;
          }

          .stepes-404-description {
            font-size: 15px;
          }

          .stepes-404-error {
            font-size: 11px;
            text-align: left;
          }

          .stepes-404-button {
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>

      <div className="stepes-404-glow stepes-404-glow-left" />
      <div className="stepes-404-glow stepes-404-glow-right" />

      <main className="stepes-404-content">
        <div className="stepes-404-brand">Global Language Platform</div>

        <h1 className="stepes-404-number">404</h1>

        <h2 className="stepes-404-title">Page Not Found</h2>

        <p className="stepes-404-description">
          Sorry, the page you're looking for could not be loaded. The resource
          may have been moved, removed, or is currently unavailable.
        </p>

        <div className="stepes-404-error">
          <strong>Error:</strong> Failed to load resource:{" "}
          net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin
        </div>

        <div className="stepes-404-actions">
          <a href="/stepes/" className="stepes-404-button stepes-404-primary">
            Back to Home
          </a>

          <button
            type="button"
            className="stepes-404-button stepes-404-secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

        <div className="stepes-404-footer">
          stepes · One Language. Infinite Possibilities.
        </div>
      </main>
    </div>
  );
}
