import React, { useMemo, useState } from "react";

const CANONICAL = "https://www.stepes.com/developers/webhooks/";

const Icon = ({ name, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const paths = {
    shield: (
      <>
        <path d="M12 3 5.8 5.4v5.8c0 4.2 2.5 7.5 6.2 9.8 3.7-2.3 6.2-5.6 6.2-9.8V5.4L12 3Z" />
        <path d="m9.2 12 1.8 1.8 3.9-4" />
      </>
    ),
    filter: (
      <>
        <path d="M4 5h16" />
        <path d="M7 12h10" />
        <path d="M10 19h4" />
      </>
    ),
    retry: (
      <>
        <path d="M20 6v5h-5" />
        <path d="M19 11a7.5 7.5 0 1 0 .2 4" />
      </>
    ),
    environment: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 9h8M8 13h5M8 17h3" />
      </>
    ),
    project: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    webhook: (
      <>
        <circle cx="6" cy="7" r="2.3" />
        <circle cx="18" cy="7" r="2.3" />
        <circle cx="12" cy="18" r="2.3" />
        <path d="M8.2 7h7.6M7.5 9l3.3 6.7M16.5 9l-3.3 6.7" />
      </>
    ),
    queue: (
      <>
        <rect x="4" y="5" width="16" height="4" rx="1.5" />
        <rect x="4" y="11" width="16" height="4" rx="1.5" />
        <rect x="4" y="17" width="16" height="2" rx="1" />
      </>
    ),
    code: (
      <>
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
        <path d="m13 5-2 14" />
      </>
    ),
    check: <path d="m5 12 4 4 10-10" />,
    key: (
      <>
        <circle cx="8" cy="12" r="3" />
        <path d="M11 12h9M17 12v3M14 12v2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    eye: (
      <>
        <path d="M3 12s3.4-5 9-5 9 5 9 5-3.4 5-9 5-9-5-9-5Z" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2" />
        <path d="M15.5 15.5A4.5 4.5 0 0 1 21 20" />
      </>
    ),
    audit: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),
    version: (
      <>
        <path d="M7 7h8a4 4 0 0 1 0 8H8" />
        <path d="m10 4-3 3 3 3" />
        <path d="m14 20 3-3-3-3" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4M7 12l3-3 2 2 4-4" />
      </>
    ),
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    alert: (
      <>
        <path d="M12 3 2.8 19h18.4L12 3Z" />
        <path d="M12 9v4M12 16h.01" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.1.1l1.8-1.8a5 5 0 0 0-7.1-7.1L10.7 5.3" />
        <path d="M14 11a5 5 0 0 0-7.1-.1l-1.8 1.8a5 5 0 0 0 7.1 7.1l1.1-1.1" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const Arrow = () => <span aria-hidden="true">→</span>;

const Eyebrow = ({ children, dark = false }) => (
  <div className={`sw-eyebrow${dark ? " sw-eyebrow--dark" : ""}`}>{children}</div>
);

const SectionHeader = ({ eyebrow, title, copy, align = "left", dark = false, id }) => (
  <div className={`sw-section-header sw-section-header--${align}`} id={id}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {copy ? <p className={dark ? "sw-copy sw-copy--light" : "sw-copy"}>{copy}</p> : null}
  </div>
);

const CodePanel = ({ title, label, children, dark = false }) => (
  <div className={`sw-code-panel${dark ? " sw-code-panel--dark" : ""}`}>
    <div className="sw-code-head">
      <div>
        {label ? <span className="sw-code-label">{label}</span> : null}
        <strong>{title}</strong>
      </div>
      <span className="sw-code-status"><span /> Example</span>
    </div>
    <pre><code>{children}</code></pre>
  </div>
);

const FeatureIcon = ({ icon }) => (
  <div className="sw-icon-box"><Icon name={icon} /></div>
);

const pageNav = [
  ["Overview", "overview"],
  ["Quickstart", "quickstart"],
  ["Event Types", "event-types"],
  ["Signatures", "signatures"],
  ["Delivery", "delivery"],
  ["Testing", "testing"],
  ["Monitoring", "monitoring"],
  ["Troubleshooting", "troubleshooting"],
];

const heroProof = [
  ["shield", "Signed Events", "Timestamped HMAC-SHA256 verification"],
  ["filter", "Selective Subscriptions", "Choose only the events your systems need"],
  ["retry", "Reliable Delivery", "Retries, duplicate protection, and redelivery"],
  ["environment", "Test and Live", "Separate endpoints, secrets, and delivery logs"],
];

const deliveryFlow = [
  ["project", "Workflow Changes", "A project, review, exception, approval, or delivery reaches a subscribed state."],
  ["webhook", "Event Created", "Stepes creates an immutable event with a stable ID and related resource."],
  ["key", "Request Signed", "The event ID, delivery timestamp, and raw body are signed together."],
  ["link", "HTTPS Delivery", "Stepes sends a JSON POST request to your registered endpoint."],
  ["queue", "Verify and Queue", "Your application verifies the signature, stores the event, and acknowledges receipt."],
  ["bolt", "Continue the Workflow", "Background processing retrieves current resources and performs the next action."],
];

const quickSteps = [
  ["Create an HTTPS Receiver", "Accept signed POST requests, preserve the raw body, and return a 2xx response within 15 seconds."],
  ["Register the Endpoint", "Create the destination in the Stepes customer portal or through the Webhook Endpoints API."],
  ["Choose Event Types", "Subscribe to project, review, approval, exception, delivery, or supported file events."],
  ["Save the Signing Secret", "Store the displayed-once endpoint secret in a server-side secret manager."],
  ["Send a Test Event", "Confirm connectivity, signature verification, event parsing, response status, and queue handling."],
  ["Verify and Acknowledge", "Validate the event before processing, store its ID, queue it, and return a successful response."],
];

const eventGroups = [
  {
    title: "Project Events",
    icon: "project",
    events: [
      ["translation.project.created", "A project is successfully created."],
      ["translation.project.accepted", "The project passes initial validation."],
      ["translation.project.started", "Translation workflow processing begins."],
      ["translation.project.completed", "All required project work is complete."],
      ["translation.project.failed", "The project reaches a terminal failure state."],
      ["translation.project.canceled", "The project is canceled."],
      ["translation.project.updated", "Customer-visible project information changes materially."],
    ],
  },
  {
    title: "Review and Approval Events",
    icon: "users",
    events: [
      ["translation.review.requested", "Professional or customer review is required."],
      ["translation.review.completed", "Review work is completed."],
      ["translation.review.reopened", "A completed review is reopened."],
      ["translation.approval.requested", "A designated approval is required."],
      ["translation.approval.completed", "Approval is granted."],
      ["translation.approval.rejected", "Approval is rejected."],
    ],
  },
  {
    title: "Exception Events",
    icon: "alert",
    events: [
      ["translation.exception.created", "A customer-visible exception requires attention."],
      ["translation.exception.updated", "The exception changes materially."],
      ["translation.exception.resolved", "The exception is resolved."],
    ],
  },
  {
    title: "Delivery Events",
    icon: "database",
    events: [
      ["translation.delivery.ready", "Multilingual deliverables are available for retrieval."],
      ["translation.delivery.started", "Delivery preparation or transfer begins."],
      ["translation.delivery.completed", "Delivery completes successfully."],
      ["translation.delivery.failed", "Delivery cannot be completed."],
      ["translation.delivery.expired", "A time-limited delivery is no longer available."],
    ],
  },
  {
    title: "Job Events",
    icon: "queue",
    events: [
      ["translation.job.created", "A language or workflow job is created."],
      ["translation.job.started", "Processing begins for the job."],
      ["translation.job.completed", "The job completes successfully."],
      ["translation.job.failed", "The job reaches a failure state."],
      ["translation.job.canceled", "The job is canceled."],
    ],
  },
  {
    title: "File Events",
    icon: "code",
    events: [
      ["translation.file.accepted", "An uploaded file passes validation."],
      ["translation.file.rejected", "An uploaded file cannot be accepted."],
      ["translation.file.processed", "File extraction or preparation completes."],
      ["translation.file.failed", "File processing fails."],
    ],
  },
];

const signatureSnippets = {
  "Node.js": `import crypto from "node:crypto";

function verify(rawBody, headers, secret) {
  const id = headers["webhook-id"];
  const timestamp = headers["webhook-timestamp"];
  const supplied = headers["webhook-signature"];
  const timestampNumber = Number(timestamp);

  if (!id || !supplied || !Number.isInteger(timestampNumber)) return false;
  if (Math.abs(Math.floor(Date.now() / 1000) - timestampNumber) > 300) return false;
  if (!secret?.startsWith("whsec_")) return false;

  const key = Buffer.from(secret.slice(6), "base64");
  const message = Buffer.concat([
    Buffer.from(id + "." + timestamp + ".", "utf8"),
    rawBody
  ]);
  const expected = crypto.createHmac("sha256", key).update(message).digest();

  return supplied.trim().split(/\s+/).some((item) => {
    const comma = item.indexOf(",");
    if (comma < 1 || item.slice(0, comma) !== "v1") return false;

    try {
      const actual = Buffer.from(item.slice(comma + 1), "base64");
      return actual.length === expected.length &&
        crypto.timingSafeEqual(actual, expected);
    } catch {
      return false;
    }
  });
}`,
  Python: `import base64
import hashlib
import hmac
import time

def verify(raw_body, headers, secret):
    event_id = headers.get("webhook-id")
    timestamp = headers.get("webhook-timestamp")
    signatures = headers.get("webhook-signature")

    if not event_id or not timestamp or not signatures:
        return False
    if not secret.startswith("whsec_"):
        return False

    try:
        timestamp_number = int(timestamp)
        key = base64.b64decode(secret[6:], validate=True)
    except (TypeError, ValueError):
        return False

    if abs(int(time.time()) - timestamp_number) > 300:
        return False

    message = event_id.encode() + b"." + timestamp.encode() + b"." + raw_body
    expected = hmac.new(key, message, hashlib.sha256).digest()

    for item in signatures.split():
        try:
            version, encoded = item.split(",", 1)
            actual = base64.b64decode(encoded, validate=True)
        except (ValueError, TypeError):
            continue

        if version == "v1" and hmac.compare_digest(actual, expected):
            return True

    return False`,
  Java: `public boolean verify(byte[] rawBody, Headers headers, String secret) {
  String id = headers.get("webhook-id");
  String timestamp = headers.get("webhook-timestamp");
  String signatures = headers.get("webhook-signature");

  requireFreshTimestamp(timestamp, 300);
  byte[] key = decodeSecret(secret);
  byte[] prefix = (id + "." + timestamp + ".").getBytes(UTF_8);
  byte[] message = concat(prefix, rawBody);
  byte[] expected = hmacSha256(key, message);

  return Arrays.stream(signatures.split(" "))
      .filter(value -> value.startsWith("v1,"))
      .map(value -> Base64.getDecoder().decode(value.substring(3)))
      .anyMatch(value -> MessageDigest.isEqual(value, expected));
}`,
  "C#": `static bool Verify(byte[] rawBody, IHeaderDictionary headers, string secret)
{
    var id = headers["webhook-id"].ToString();
    var timestamp = headers["webhook-timestamp"].ToString();
    var signatures = headers["webhook-signature"].ToString();

    EnsureFreshTimestamp(timestamp, 300);
    var key = Convert.FromBase64String(secret.Replace("whsec_", ""));
    var prefix = Encoding.UTF8.GetBytes($"{id}.{timestamp}.");
    var message = prefix.Concat(rawBody).ToArray();
    var expected = new HMACSHA256(key).ComputeHash(message);

    return signatures.Split(' ').Any(item => {
        var parts = item.Split(',', 2);
        if (parts[0] != "v1") return false;
        return CryptographicOperations.FixedTimeEquals(
            Convert.FromBase64String(parts[1]), expected
        );
    });
}`,
};

const retryRows = [
  ["1", "Immediately"],
  ["2", "5 seconds"],
  ["3", "5 minutes"],
  ["4", "30 minutes"],
  ["5", "2 hours"],
  ["6", "5 hours"],
  ["7", "10 hours"],
  ["8", "14 hours"],
  ["9", "20 hours"],
  ["10", "24 hours"],
];

const testScenarios = [
  "Valid signed event",
  "Invalid signature",
  "Stale timestamp",
  "Duplicate delivery",
  "Out-of-order event",
  "Receiver timeout",
  "500 response",
  "429 response",
  "Secret rotation",
  "Manual redelivery",
];

const testResults = {
  "Valid signed event": [
    ["Signature verification", "Passed", "ok"],
    ["Endpoint response", "204 No Content", "neutral"],
    ["Response time", "184 ms", "neutral"],
    ["Delivery result", "Succeeded", "ok"],
  ],
  "Invalid signature": [
    ["Signature verification", "Rejected", "fail"],
    ["Endpoint response", "400 Bad Request", "neutral"],
    ["Response time", "42 ms", "neutral"],
    ["Delivery result", "Not processed", "fail"],
  ],
  "Stale timestamp": [
    ["Timestamp validation", "Rejected", "fail"],
    ["Endpoint response", "400 Bad Request", "neutral"],
    ["Response time", "38 ms", "neutral"],
    ["Delivery result", "Replay blocked", "fail"],
  ],
  "Duplicate delivery": [
    ["Signature verification", "Passed", "ok"],
    ["Endpoint response", "204 No Content", "neutral"],
    ["Idempotency check", "Duplicate detected", "warn"],
    ["Delivery result", "Ignored safely", "ok"],
  ],
  "Out-of-order event": [
    ["Signature verification", "Passed", "ok"],
    ["Endpoint response", "204 No Content", "neutral"],
    ["Resource version", "Older event detected", "warn"],
    ["Delivery result", "API state reconciled", "ok"],
  ],
  "Receiver timeout": [
    ["Signature verification", "Passed", "ok"],
    ["Endpoint response", "Timed out", "fail"],
    ["Response time", "15.0 s", "neutral"],
    ["Delivery result", "Retry scheduled", "warn"],
  ],
  "500 response": [
    ["Signature verification", "Passed", "ok"],
    ["Endpoint response", "500 Internal Server Error", "fail"],
    ["Response time", "221 ms", "neutral"],
    ["Delivery result", "Retry scheduled", "warn"],
  ],
  "429 response": [
    ["Signature verification", "Passed", "ok"],
    ["Endpoint response", "429 Too Many Requests", "warn"],
    ["Retry-After", "Accepted", "ok"],
    ["Delivery result", "Retry scheduled", "warn"],
  ],
  "Secret rotation": [
    ["Signature verification", "Passed", "ok"],
    ["Active signature", "New secret", "neutral"],
    ["Previous signature", "Also valid", "neutral"],
    ["Delivery result", "Rotation verified", "ok"],
  ],
  "Manual redelivery": [
    ["Signature verification", "Passed", "ok"],
    ["Event ID", "Preserved", "neutral"],
    ["Delivery ID", "New attempt created", "neutral"],
    ["Delivery result", "Succeeded", "ok"],
  ],
};

const troubleshootingRows = [
  ["Signature does not match", "The request body changed before verification.", "Verify the unchanged request-body bytes."],
  ["Timestamp is rejected", "Server clock drift or a delayed replay.", "Synchronize server time and inspect the delivery timestamp."],
  ["Duplicate business actions occur", "Processed event IDs are not stored.", "Deduplicate all processing with webhook-id."],
  ["Events appear out of order", "Delivery timing differs from event occurrence order.", "Compare resource versions and retrieve current API state."],
  ["Delivery times out", "The handler performs synchronous downstream work.", "Queue the event and acknowledge it promptly."],
  ["Endpoint becomes disabled", "It returned 410 Gone or was disabled administratively.", "Correct the destination and enable it again."],
  ["Certificate validation fails", "The certificate is expired, invalid, or untrusted.", "Install a valid publicly trusted certificate."],
  ["An expected event is missing", "The endpoint is not subscribed to the event.", "Review endpoint subscriptions and environment."],
];

const faqs = [
  ["What is the difference between webhooks and API polling?", "Polling requires your application to request status repeatedly. Webhooks notify your application after a subscribed workflow event occurs. Use webhooks for event-driven updates and API resources for authoritative current-state retrieval and reconciliation."],
  ["Which webhook events can I receive?", "The initial catalog covers translation projects, jobs, reviews, approvals, exceptions, deliveries, and supported file-processing activities. Each event reference identifies the trigger, schema, related resource, availability, and version."],
  ["Can I choose which events an endpoint receives?", "Yes. Each endpoint can subscribe to specific event types or supported event families, so your application receives only the events it is prepared to process."],
  ["How do I know a webhook came from Stepes?", "Verify the webhook-signature using the endpoint signing secret, event ID, delivery timestamp, and unchanged request body. Validate the timestamp as part of replay protection before trusting the event."],
  ["What response should my endpoint return?", "Return any HTTP status from 200 through 299 after the event has been verified and safely accepted. A 204 No Content response is a simple recommended option."],
  ["Does Stepes guarantee exactly-once delivery?", "No. Webhooks use at-least-once delivery semantics. Events may be delivered more than once because of retries, network uncertainty, or manual redelivery. Store event IDs and make handlers idempotent."],
  ["Are webhook events delivered in order?", "Ordering is not guaranteed. Compare resource versions where available and retrieve the latest related resource when event order affects your application logic."],
  ["How long does Stepes retry a failed delivery?", "Eligible failures are retried with exponential backoff and randomized jitter for approximately 75 hours. A successful response, disabled endpoint, 410 Gone response, or exhausted retry period stops further automatic attempts."],
  ["Can I manually redeliver an event?", "Yes. Authorized users can redeliver an event from delivery history. The event ID and body remain unchanged, while the new attempt receives a fresh delivery ID, timestamp, and signature."],
  ["How long is delivery history available?", "Webhook delivery history is retained for at least 30 days. Applicable enterprise configurations may provide additional retention options."],
  ["Can I rotate a signing secret without downtime?", "Yes. During rotation, deliveries can include signatures generated by both the new and previous secrets. Your receiver can accept either active signature until the previous secret is revoked."],
  ["Are source and translated files included in webhook payloads?", "No. Events ordinarily contain identifiers, status information, resource versions, timestamps, and an authenticated API URL. Retrieve documents and larger resources through the relevant API operation."],
  ["Can I use source IP allowlisting?", "Yes, where published Stepes outbound webhook IP ranges are available. IP allowlisting is an additional network control and should always be used together with signature verification."],
  ["Are test and production webhooks separated?", "Yes. Test and live endpoints have separate configurations, signing secrets, event data, delivery history, credentials, and alerts."],
  ["How are webhook schemas versioned?", "Each endpoint is pinned to an event-schema version. Backward-compatible additions can appear within that version, while breaking changes require a new version and a documented migration process."],
];

const relatedDocs = [
  ["Translation API", "Submit content, configure translation workflows, monitor asynchronous processing, and retrieve multilingual results.", "https://www.stepes.com/developers/translation-api/"],
  ["Translation API Quickstart", "Authenticate, create a project, submit content, monitor processing, and retrieve completed translations.", "https://www.stepes.com/developers/translation-api/getting-started/"],
  ["API Reference", "Explore Stepes resources, operations, schemas, errors, and machine-readable webhook contracts.", "https://www.stepes.com/developers/translation-api/reference/"],
  ["Project Status", "Understand project, job, review, exception, approval, and delivery lifecycle states.", "https://www.stepes.com/developers/translation-api/project-status/"],
  ["Integrations", "Connect Stepes with content, product, development, support, and enterprise business systems.", "https://www.stepes.com/developers/integrations/"],
  ["Software Localization API", "Automate software resource exchange, localization processing, status tracking, and localized delivery.", "https://www.stepes.com/developers/software-localization-api/"],
  ["Developer Security", "Review authentication, credential handling, access controls, and secure implementation guidance.", "https://www.stepes.com/developers/security/"],
];

function StepesWebhooksWireframe() {
  const [activeLang, setActiveLang] = useState("Node.js");
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedTest, setSelectedTest] = useState(0);
  const [eventFilter, setEventFilter] = useState("All Events");

  const filteredGroups = useMemo(() => {
    if (eventFilter === "All Events") return eventGroups;
    if (eventFilter === "Projects") return eventGroups.filter((group) => group.title.includes("Project"));
    if (eventFilter === "Reviews & Approvals") return eventGroups.filter((group) => group.title.includes("Review"));
    if (eventFilter === "Exceptions") return eventGroups.filter((group) => group.title.includes("Exception"));
    if (eventFilter === "Deliveries") return eventGroups.filter((group) => group.title.includes("Delivery"));
    if (eventFilter === "Jobs") return eventGroups.filter((group) => group.title.includes("Job"));
    if (eventFilter === "Files") return eventGroups.filter((group) => group.title.includes("File"));
    return eventGroups;
  }, [eventFilter]);

  return (
    <main className="sw-page">
      <style>{`
        :root {
          --sw-magenta: #c11d63;
          --sw-magenta-dark: #9f1d55;
          --sw-magenta-deep: #7a1542;
          --sw-blush: #fdf2f7;
          --sw-light-magenta: #f2a7c6;
          --sw-ink: #18212c;
          --sw-copy: #4b5664;
          --sw-muted: #687484;
          --sw-line: #e6e9ee;
          --sw-soft: #f7f8fa;
          --sw-dark: #151b24;
          --sw-dark-soft: #202836;
          --sw-white: #ffffff;
          --sw-radius-lg: 30px;
          --sw-radius-md: 22px;
          --sw-shadow: 0 18px 50px rgba(24, 33, 44, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        section[id] { scroll-margin-top: 82px; }
        .sw-page {
          width: 100%;
          overflow-x: clip;
          background: var(--sw-white);
          color: var(--sw-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.62;
          -webkit-font-smoothing: antialiased;
        }
        .sw-page a { color: inherit; }
        .sw-standalone-title { margin: 0; font-size: 36px; line-height: 1.16; letter-spacing: -0.025em; font-weight: 600; }
        .sw-standalone-h3 { margin: 0; font-size: 24px; line-height: 1.35; font-weight: 600; }
        .sw-container {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }
        .sw-hero-grid > *,
        .sw-overview-grid > *,
        .sw-quick-grid > *,
        .sw-endpoint-grid > *,
        .sw-structure-grid > *,
        .sw-signature-grid > *,
        .sw-reliability-grid > *,
        .sw-testing-grid > *,
        .sw-monitor-grid > *,
        .sw-security-grid > *,
        .sw-version-grid > *,
        .sw-faq-layout > * { min-width: 0; }
        .sw-section { padding: 96px 0; }
        .sw-section--dense { padding: 80px 0; }
        .sw-section--soft { background: var(--sw-soft); }
        .sw-section--dark { background: var(--sw-dark); color: var(--sw-white); }
        .sw-section--blush { background: var(--sw-blush); }
        .sw-eyebrow {
          margin: 0 0 18px;
          color: var(--sw-magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .sw-eyebrow--dark { color: var(--sw-light-magenta); }
        .sw-section-header { max-width: 800px; margin-bottom: 54px; }
        .sw-section-header--center { text-align: center; margin-inline: auto; }
        .sw-section-header h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }
        .sw-section-header .sw-copy { margin: 20px 0 0; }
        .sw-copy {
          max-width: 760px;
          color: var(--sw-copy);
          font-size: 17px;
          line-height: 1.72;
        }
        .sw-copy--light { color: #cbd4df; }
        .sw-lead {
          margin: 24px 0 0;
          max-width: 740px;
          color: var(--sw-copy);
          font-size: 19px;
          line-height: 1.7;
        }
        .sw-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sw-magenta) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          min-height: 44px;
          transition: color .2s ease, gap .2s ease;
        }
        .sw-link:hover { color: var(--sw-magenta-dark) !important; gap: 12px; }
        .sw-link--dark, .sw-link--dark:visited, .sw-link--dark:hover, .sw-link--dark:active, .sw-link--dark:focus-visible { color: var(--sw-light-magenta) !important; }
        .sw-link:focus-visible,
        .sw-button:focus-visible,
        .sw-tab:focus-visible,
        .sw-faq-button:focus-visible,
        .sw-filter-button:focus-visible,
        .sw-test-option:focus-visible {
          outline: 3px solid rgba(193, 29, 99, .24);
          outline-offset: 3px;
        }
        .sw-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 50px;
          padding: 13px 24px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .sw-button--primary,
        .sw-button--primary:visited,
        .sw-button--primary:hover,
        .sw-button--primary:active,
        .sw-button--primary:focus-visible {
          background: var(--sw-magenta);
          color: #fff !important;
        }
        .sw-button--primary:hover { background: var(--sw-magenta-dark); transform: translateY(-2px); box-shadow: 0 12px 24px rgba(193, 29, 99, .22); }
        .sw-button--secondary { background: #fff; color: var(--sw-ink) !important; border-color: #d8dde5; }
        .sw-button--secondary:hover { transform: translateY(-2px); border-color: #bfc6d0; box-shadow: 0 10px 22px rgba(24,33,44,.08); }

        /* Hero */
        .sw-hero { padding: 104px 0 52px; background: #fff; }
        .sw-hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(420px, .98fr); gap: 76px; align-items: center; }
        .sw-hero h1 {
          margin: 0;
          max-width: 680px;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 600;
        }
        .sw-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
        .sw-hero-text-link { margin-top: 14px; }
        .sw-event-visual {
          position: relative;
          min-width: 0;
          min-height: 488px;
          padding: 30px;
          border: 1px solid var(--sw-line);
          border-radius: var(--sw-radius-lg);
          background: linear-gradient(145deg, #fff 0%, #fbf7fa 100%);
          box-shadow: var(--sw-shadow);
          overflow: hidden;
        }
        .sw-event-visual::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          right: 0;
          top: 0;
          transform: translate(38%, -38%);
          background: rgba(193,29,99,.08);
          pointer-events: none;
        }
        .sw-visual-head { display: flex; align-items: center; justify-content: space-between; gap: 18px; position: relative; z-index: 1; }
        .sw-window-dots { display: flex; gap: 7px; }
        .sw-window-dots span { width: 8px; height: 8px; border-radius: 50%; background: #d6dbe3; }
        .sw-visual-status { display: inline-flex; align-items: center; gap: 7px; font-size: 14px; color: var(--sw-muted); }
        .sw-visual-status i { width: 8px; height: 8px; border-radius: 50%; background: #39a56d; }
        .sw-pipeline { position: relative; z-index: 1; display: grid; gap: 18px; margin-top: 34px; }
        .sw-pipeline-node {
          position: relative;
          min-width: 0;
          display: grid;
          grid-template-columns: 46px minmax(0,1fr) auto;
          gap: 14px;
          align-items: center;
          padding: 18px;
          border: 1px solid #e2e6eb;
          border-radius: 20px;
          background: rgba(255,255,255,.94);
        }
        .sw-pipeline-node + .sw-pipeline-node::before {
          content: "";
          position: absolute;
          left: 40px;
          top: -19px;
          height: 18px;
          width: 1px;
          background: #d5dbe3;
        }
        .sw-pipeline-icon { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 15px; background: var(--sw-blush); color: var(--sw-magenta); }
        .sw-pipeline-node > div:nth-child(2) { min-width: 0; }
        .sw-pipeline-node strong { display: block; font-size: 16px; line-height: 1.35; font-weight: 600; overflow-wrap: anywhere; }
        .sw-pipeline-node small { display: block; margin-top: 4px; font-size: 14px; line-height: 1.45; color: var(--sw-muted); overflow-wrap: anywhere; }
        .sw-node-badge { padding: 5px 9px; border-radius: 999px; background: #edf8f2; color: #27764e; font-size: 12px; font-weight: 600; white-space: nowrap; }
        .sw-payload-strip { margin-top: 22px; padding: 15px 17px; border-radius: 16px; background: #202633; color: #e6ecf3; font: 14px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace; overflow: hidden; }
        .sw-proof-strip { border-top: 1px solid var(--sw-line); border-bottom: 1px solid var(--sw-line); }
        .sw-proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .sw-proof-item { display: grid; grid-template-columns: 42px 1fr; gap: 13px; padding: 28px 24px; align-items: start; }
        .sw-proof-item + .sw-proof-item { border-left: 1px solid var(--sw-line); }
        .sw-proof-item .sw-icon-box { width: 42px; height: 42px; }
        .sw-proof-item strong { display: block; font-size: 16px; line-height: 1.4; font-weight: 600; }
        .sw-proof-item span { display: block; margin-top: 4px; color: var(--sw-muted); font-size: 16px; line-height: 1.5; }

        /* Local nav */
        .sw-local-nav { position: sticky; top: 0; z-index: 30; background: rgba(255,255,255,.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--sw-line); }
        .sw-local-nav-inner { display: flex; align-items: center; gap: 28px; min-height: 62px; overflow-x: auto; scrollbar-width: none; }
        .sw-local-nav-inner::-webkit-scrollbar { display: none; }
        .sw-local-nav a { display: inline-flex; align-items: center; flex: 0 0 auto; min-height: 44px; color: var(--sw-copy); font-size: 14px; font-weight: 600; text-decoration: none; }
        .sw-local-nav a:hover { color: var(--sw-magenta); }

        /* Overview */
        .sw-overview-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 70px; align-items: start; }
        .sw-overview-copy h2 { margin: 0; font-size: 36px; line-height: 1.16; letter-spacing: -.025em; font-weight: 600; }
        .sw-overview-copy p { margin: 20px 0 0; color: var(--sw-copy); font-size: 17px; }
        .sw-use-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; margin: 30px 0 0; padding: 0; list-style: none; }
        .sw-use-list li { display: grid; grid-template-columns: 20px 1fr; gap: 10px; padding: 14px 0; border-top: 1px solid var(--sw-line); color: var(--sw-copy); font-size: 16px; }
        .sw-use-list svg { color: var(--sw-magenta); margin-top: 3px; }
        .sw-compare { border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); overflow: hidden; background: #fff; }
        .sw-compare-head { display: grid; grid-template-columns: 1fr 1fr; background: var(--sw-soft); border-bottom: 1px solid var(--sw-line); }
        .sw-compare-head div { padding: 20px 24px; font-size: 16px; font-weight: 600; }
        .sw-compare-head div + div { border-left: 1px solid var(--sw-line); color: var(--sw-magenta); }
        .sw-compare-row { display: grid; grid-template-columns: 1fr 1fr; }
        .sw-compare-row + .sw-compare-row { border-top: 1px solid var(--sw-line); }
        .sw-compare-row p { margin: 0; padding: 18px 24px; color: var(--sw-copy); font-size: 16px; }
        .sw-compare-row p + p { border-left: 1px solid var(--sw-line); }
        .sw-overview-note { margin-top: 24px; padding: 20px 22px; border-left: 3px solid var(--sw-magenta); background: var(--sw-blush); color: var(--sw-copy); font-size: 16px; }

        /* Flow */
        .sw-flow { display: grid; grid-template-columns: repeat(6, 1fr); border-top: 1px solid #dfe3e8; border-bottom: 1px solid #dfe3e8; }
        .sw-flow-step { position: relative; padding: 28px 22px 30px; }
        .sw-flow-step + .sw-flow-step { border-left: 1px solid #dfe3e8; }
        .sw-flow-icon { width: 44px; height: 44px; display: grid; place-items: center; color: var(--sw-magenta); margin-bottom: 22px; }
        .sw-flow-step strong { display: block; font-size: 17px; line-height: 1.35; font-weight: 600; }
        .sw-flow-step p { margin: 10px 0 0; color: var(--sw-copy); font-size: 16px; line-height: 1.6; }
        .sw-flow-index { position: absolute; top: 18px; right: 18px; color: #9ca5b1; font-size: 12px; font-weight: 600; }

        /* Quickstart */
        .sw-quick-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 70px; align-items: start; }
        .sw-quick-list { counter-reset: quick; }
        .sw-quick-row { position: relative; display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 16px; padding: 22px 0; border-top: 1px solid rgba(255,255,255,.13); }
        .sw-quick-row:first-child { border-top: 0; padding-top: 0; }
        .sw-quick-number { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; border: 1px solid rgba(242,167,198,.42); color: var(--sw-light-magenta); font-size: 14px; font-weight: 600; }
        .sw-quick-row strong { display: block; color: #fff; font-size: 18px; line-height: 1.4; font-weight: 600; }
        .sw-quick-row p { margin: 7px 0 0; color: #cbd4df; font-size: 16px; line-height: 1.65; }
        .sw-code-panel { border: 1px solid var(--sw-line); border-radius: 24px; overflow: hidden; background: #fff; min-width: 0; }
        .sw-code-panel--dark { border-color: #303a49; background: var(--sw-dark-soft); }
        .sw-code-head { min-height: 66px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 16px 20px; border-bottom: 1px solid var(--sw-line); background: #fbfbfc; }
        .sw-code-head > div { min-width: 0; }
        .sw-code-panel--dark .sw-code-head { background: #252e3d; border-bottom-color: #354052; }
        .sw-code-head strong { display: block; font-size: 16px; font-weight: 600; overflow-wrap: anywhere; }
        .sw-code-panel--dark .sw-code-head strong { color: #f3f6f9; }
        .sw-code-label { display: block; margin-bottom: 3px; color: var(--sw-magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
        .sw-code-status { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 7px; color: var(--sw-muted); font-size: 13px; }
        .sw-code-status span { width: 7px; height: 7px; border-radius: 50%; background: #39a56d; }
        .sw-code-panel pre { margin: 0; padding: 22px; overflow: auto; max-width: 100%; font: 14px/1.65 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; color: #26313e; background: #fff; }
        .sw-code-panel--dark pre { color: #dce5ee; background: #1c2330; }
        .sw-code-stack { display: grid; gap: 18px; }
        .sw-success-callout { display: flex; gap: 13px; align-items: flex-start; margin-top: 24px; padding: 18px 20px; border-radius: 18px; background: rgba(57,165,109,.12); color: #dff4e9; font-size: 16px; }
        .sw-success-callout svg { flex: 0 0 auto; color: #79d49f; margin-top: 2px; }

        /* Endpoint */
        .sw-endpoint-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 66px; align-items: center; }
        .sw-dashboard { border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: #fff; box-shadow: var(--sw-shadow); overflow: hidden; }
        .sw-dashboard-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 20px 24px; border-bottom: 1px solid var(--sw-line); }
        .sw-dashboard-toolbar strong { font-size: 17px; font-weight: 600; }
        .sw-mini-button { padding: 8px 14px; border-radius: 999px; background: var(--sw-magenta); color: #fff; font-size: 13px; font-weight: 600; }
        .sw-endpoint-row { display: grid; grid-template-columns: minmax(0,1.3fr) .7fr .55fr; gap: 18px; align-items: center; padding: 20px 24px; }
        .sw-endpoint-row + .sw-endpoint-row { border-top: 1px solid var(--sw-line); }
        .sw-endpoint-name { min-width: 0; }
        .sw-endpoint-name strong { display: block; font-size: 16px; font-weight: 600; }
        .sw-endpoint-name span { display: block; margin-top: 4px; color: var(--sw-muted); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; overflow-wrap: anywhere; }
        .sw-status-pill { justify-self: start; padding: 5px 10px; border-radius: 999px; background: #edf8f2; color: #27764e; font-size: 12px; font-weight: 600; }
        .sw-status-pill--test { background: #eef3fb; color: #3b5e91; }
        .sw-delivery-meta { color: var(--sw-muted); font-size: 14px; }
        .sw-editorial-list { border-top: 1px solid var(--sw-line); }
        .sw-editorial-row { display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-editorial-row .sw-icon-box { margin-top: 1px; }
        .sw-editorial-row strong { display: block; font-size: 18px; line-height: 1.4; font-weight: 600; }
        .sw-editorial-row p { margin: 7px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-icon-box { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; background: var(--sw-blush); color: var(--sw-magenta); }

        /* Event structure */
        .sw-structure-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 58px; align-items: start; }
        .sw-field-list { border-top: 1px solid var(--sw-line); }
        .sw-field-row { display: grid; grid-template-columns: 145px minmax(0,1fr); gap: 20px; padding: 17px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-field-row code { color: var(--sw-magenta-dark); font: 600 14px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; word-break: break-word; }
        .sw-field-row p { margin: 0; color: var(--sw-copy); font-size: 16px; }
        .sw-thin-note { margin-top: 28px; padding: 22px; border-radius: 20px; background: var(--sw-blush); }
        .sw-thin-note strong { display: block; font-size: 17px; font-weight: 600; }
        .sw-thin-note p { margin: 8px 0 0; color: var(--sw-copy); font-size: 16px; }

        /* Events */
        .sw-event-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 28px; }
        .sw-filter-group { display: flex; flex-wrap: wrap; gap: 9px; }
        .sw-filter-button { min-height: 44px; padding: 9px 15px; border: 1px solid var(--sw-line); border-radius: 999px; background: #fff; color: var(--sw-copy); font-size: 14px; font-weight: 600; cursor: pointer; }
        .sw-filter-button.is-active { background: var(--sw-ink); color: #fff; border-color: var(--sw-ink); }
        .sw-availability { max-width: 390px; color: var(--sw-muted); font-size: 16px; line-height: 1.55; }
        .sw-event-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--sw-line); }
        .sw-event-group { padding: 30px 32px 30px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-event-group:nth-child(even) { padding-left: 32px; padding-right: 0; border-left: 1px solid var(--sw-line); }
        .sw-event-group-head { display: flex; align-items: center; gap: 13px; margin-bottom: 18px; }
        .sw-event-group-head .sw-icon-box { width: 40px; height: 40px; }
        .sw-event-group h3 { margin: 0; font-size: 22px; line-height: 1.35; font-weight: 600; }
        .sw-event-entry { padding: 13px 0; }
        .sw-event-entry + .sw-event-entry { border-top: 1px solid #edf0f3; }
        .sw-event-entry code { display: block; color: var(--sw-magenta-dark); font: 600 14px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; overflow-wrap: anywhere; }
        .sw-event-entry span { display: block; margin-top: 5px; color: var(--sw-copy); font-size: 16px; }

        /* Signature */
        .sw-signature-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 64px; align-items: start; }
        .sw-signature-copy h2 { margin: 0; font-size: 36px; line-height: 1.16; letter-spacing: -.025em; font-weight: 600; }
        .sw-signature-copy > p { margin: 20px 0 0; color: #cbd4df; font-size: 17px; }
        .sw-verification-list { margin-top: 30px; border-top: 1px solid rgba(255,255,255,.14); }
        .sw-verify-row { display: grid; grid-template-columns: 36px 1fr; gap: 14px; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
        .sw-verify-index { color: var(--sw-light-magenta); font-size: 14px; font-weight: 600; }
        .sw-verify-row p { margin: 0; color: #d4dde7; font-size: 16px; }
        .sw-tabs { display: flex; width: 100%; max-width: 100%; min-width: 0; gap: 2px; padding: 6px; background: #252e3d; border: 1px solid #354052; border-radius: 16px 16px 0 0; overflow-x: auto; }
        .sw-tab { flex: 0 0 auto; min-height: 44px; padding: 8px 14px; border: 0; border-radius: 11px; background: transparent; color: #bfc9d6; font-size: 14px; font-weight: 600; cursor: pointer; }
        .sw-tab.is-active { background: #fff; color: var(--sw-ink); }
        .sw-signature-code { width: 100%; max-width: 100%; min-width: 0; border: 1px solid #354052; border-top: 0; border-radius: 0 0 24px 24px; overflow: hidden; background: #1c2330; }
        .sw-signature-code pre { margin: 0; padding: 24px; overflow: auto; max-height: 570px; color: #dce5ee; font: 14px/1.65 ui-monospace, SFMono-Regular, Menlo, monospace; }
        .sw-signature-note { margin-top: 20px; padding: 19px 20px; border: 1px solid rgba(242,167,198,.28); border-radius: 18px; color: #dce5ee; font-size: 16px; }
        .sw-signature-note strong { color: #fff; font-weight: 600; }

        /* Rotation */
        .sw-rotation { display: grid; grid-template-columns: repeat(5, 1fr); align-items: start; }
        .sw-rotation-step { position: relative; padding: 26px 24px; text-align: center; }
        .sw-rotation-step + .sw-rotation-step::before { content: ""; position: absolute; left: 0; top: 54px; width: 1px; height: 58px; background: var(--sw-line); }
        .sw-rotation-badge { width: 54px; height: 54px; margin: 0 auto 18px; border-radius: 50%; display: grid; place-items: center; background: var(--sw-blush); color: var(--sw-magenta); }
        .sw-rotation-step strong { display: block; font-size: 17px; font-weight: 600; }
        .sw-rotation-step p { margin: 8px 0 0; color: var(--sw-copy); font-size: 16px; }

        /* Reliability */
        .sw-reliability-grid { display: grid; grid-template-columns: .96fr 1.04fr; gap: 66px; align-items: start; }
        .sw-reliability-copy h2 { margin: 0; font-size: 36px; line-height: 1.16; letter-spacing: -.025em; font-weight: 600; }
        .sw-reliability-copy > p { margin: 20px 0 0; color: var(--sw-copy); font-size: 17px; }
        .sw-principles { margin-top: 30px; border-top: 1px solid var(--sw-line); }
        .sw-principle { display: grid; grid-template-columns: 36px minmax(0,1fr); gap: 14px; padding: 18px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-principle svg { color: var(--sw-magenta); margin-top: 2px; }
        .sw-principle strong { display: block; font-size: 17px; font-weight: 600; }
        .sw-principle p { margin: 5px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-retry-panel { border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: #fff; overflow: hidden; }
        .sw-retry-head { padding: 22px 24px; border-bottom: 1px solid var(--sw-line); background: var(--sw-soft); }
        .sw-retry-head strong { display: block; font-size: 18px; font-weight: 600; }
        .sw-retry-head span { display: block; margin-top: 4px; color: var(--sw-muted); font-size: 16px; line-height: 1.55; }
        .sw-retry-rows { display: grid; grid-template-columns: repeat(5, 1fr); }
        .sw-retry-cell { padding: 18px 16px; border-bottom: 1px solid var(--sw-line); text-align: center; }
        .sw-retry-cell:nth-child(5n + 2),
        .sw-retry-cell:nth-child(5n + 3),
        .sw-retry-cell:nth-child(5n + 4),
        .sw-retry-cell:nth-child(5n + 5) { border-left: 1px solid var(--sw-line); }
        .sw-retry-cell strong { display: block; font-size: 14px; font-weight: 600; }
        .sw-retry-cell span { display: block; margin-top: 4px; color: var(--sw-copy); font-size: 16px; }
        .sw-response-matrix { margin-top: 18px; border: 1px solid var(--sw-line); border-radius: 22px; overflow: hidden; }
        .sw-response-row { display: grid; grid-template-columns: 130px minmax(0,1fr); }
        .sw-response-row + .sw-response-row { border-top: 1px solid var(--sw-line); }
        .sw-response-row strong { padding: 14px 18px; background: var(--sw-soft); font-size: 14px; font-weight: 600; }
        .sw-response-row span { padding: 14px 18px; color: var(--sw-copy); font-size: 16px; }
        .sw-redelivery-band { margin-top: 34px; padding: 26px; border: 1px solid #eadce3; border-radius: 22px; background: var(--sw-blush); }
        .sw-redelivery-copy .sw-eyebrow { margin-bottom: 10px; }
        .sw-redelivery-copy h3 { margin: 0; font-size: 20px; line-height: 1.35; font-weight: 600; }
        .sw-redelivery-copy p { margin: 8px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-redelivery-facts { display: grid; grid-template-columns: repeat(3,1fr); margin-top: 22px; border-top: 1px solid #e5d5dd; }
        .sw-redelivery-facts div { padding: 18px 18px 0 0; }
        .sw-redelivery-facts div + div { padding-left: 18px; border-left: 1px solid #e5d5dd; }
        .sw-redelivery-facts strong { display: block; font-size: 16px; font-weight: 600; }
        .sw-redelivery-facts span { display: block; margin-top: 5px; color: var(--sw-copy); font-size: 16px; line-height: 1.55; }

        /* Testing */
        .sw-testing-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 64px; align-items: start; }
        .sw-test-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 28px; }
        .sw-test-option { display: flex; align-items: center; gap: 10px; min-height: 52px; padding: 12px 14px; border: 1px solid var(--sw-line); border-radius: 14px; background: #fff; color: var(--sw-copy); font-size: 16px; line-height: 1.45; text-align: left; cursor: pointer; }
        .sw-test-option i { width: 10px; height: 10px; border-radius: 50%; background: #cbd1d8; flex: 0 0 auto; }
        .sw-test-option.is-active { border-color: rgba(193,29,99,.35); background: var(--sw-blush); color: var(--sw-ink); }
        .sw-test-option.is-active i { background: var(--sw-magenta); }
        .sw-test-console { border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: #fff; box-shadow: var(--sw-shadow); overflow: hidden; }
        .sw-console-head { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 20px 22px; border-bottom: 1px solid var(--sw-line); }
        .sw-console-head strong { font-size: 17px; font-weight: 600; }
        .sw-console-run { padding: 8px 14px; border-radius: 999px; background: var(--sw-magenta); color: #fff; font-size: 13px; font-weight: 600; }
        .sw-console-form { padding: 22px; display: grid; gap: 16px; }
        .sw-form-row { display: grid; grid-template-columns: 145px minmax(0,1fr); gap: 16px; align-items: center; }
        .sw-form-row label { color: var(--sw-copy); font-size: 14px; font-weight: 600; }
        .sw-field-mock { min-width: 0; min-height: 45px; display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 13px; border: 1px solid var(--sw-line); border-radius: 11px; color: var(--sw-copy); font-size: 16px; line-height: 1.45; background: var(--sw-soft); }
        .sw-field-mock span:first-child { min-width: 0; overflow-wrap: anywhere; }
        .sw-console-result { margin: 0 22px 22px; padding: 18px; border-radius: 16px; background: #1c2330; color: #dce5ee; }
        .sw-result-line { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 9px 0; font-size: 16px; line-height: 1.45; }
        .sw-result-line + .sw-result-line { border-top: 1px solid #303a49; }
        .sw-result-line strong { color: #fff; font-weight: 600; text-align: right; }
        .sw-result-value--ok { color: #79d49f !important; }
        .sw-result-value--warn { color: #f3c773 !important; }
        .sw-result-value--fail { color: #ff9da7 !important; }
        .sw-result-value--neutral { color: #fff !important; }

        /* Monitoring */
        .sw-monitor-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 60px; align-items: start; }
        .sw-monitor-board { border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: #fff; box-shadow: var(--sw-shadow); overflow: hidden; }
        .sw-board-top { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 20px 22px; border-bottom: 1px solid var(--sw-line); }
        .sw-board-top strong { display: block; font-size: 17px; font-weight: 600; }
        .sw-example-label { display: block; margin-top: 3px; color: var(--sw-muted); font-size: 13px; }
        .sw-health { display: inline-flex; align-items: center; gap: 7px; color: #27764e; font-size: 13px; font-weight: 600; }
        .sw-health i { width: 8px; height: 8px; border-radius: 50%; background: #39a56d; }
        .sw-metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid var(--sw-line); }
        .sw-metric { padding: 20px; }
        .sw-metric + .sw-metric { border-left: 1px solid var(--sw-line); }
        .sw-metric span { display: block; color: var(--sw-muted); font-size: 13px; }
        .sw-metric strong { display: block; margin-top: 5px; font-size: 22px; line-height: 1.3; font-weight: 600; }
        .sw-delivery-table { width: 100%; border-collapse: collapse; }
        .sw-delivery-table th,
        .sw-delivery-table td { padding: 15px 18px; border-bottom: 1px solid var(--sw-line); text-align: left; vertical-align: top; }
        .sw-delivery-table th { color: var(--sw-muted); font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; background: var(--sw-soft); }
        .sw-delivery-table td { color: var(--sw-copy); font-size: 16px; }
        .sw-delivery-table td:first-child { color: var(--sw-ink); font-weight: 600; }
        .sw-delivery-table code { color: var(--sw-magenta-dark); font-size: 14px; overflow-wrap: anywhere; }
        .sw-health-list { border-top: 1px solid var(--sw-line); }
        .sw-health-item { display: grid; grid-template-columns: 14px minmax(0,1fr); gap: 13px; padding: 20px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-health-dot { width: 10px; height: 10px; margin-top: 7px; border-radius: 50%; }
        .sw-health-dot--healthy { background: #39a56d; }
        .sw-health-dot--degraded { background: #dd9b2d; }
        .sw-health-dot--failing { background: #c94b56; }
        .sw-health-dot--disabled { background: #98a1ad; }
        .sw-health-item strong { display: block; font-size: 17px; font-weight: 600; }
        .sw-health-item p { margin: 5px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-notification-note { margin-top: 22px; padding: 18px 20px; border-radius: 18px; background: var(--sw-blush); }
        .sw-notification-note strong { display: block; font-size: 16px; font-weight: 600; }
        .sw-notification-note p { margin: 6px 0 0; color: var(--sw-copy); font-size: 16px; line-height: 1.6; }

        /* Security */
        .sw-security-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 64px; align-items: start; }
        .sw-security-list { border-top: 1px solid var(--sw-line); }
        .sw-security-row { display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-security-row strong { display: block; font-size: 18px; font-weight: 600; }
        .sw-security-row p { margin: 7px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-role-panel { border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); overflow: hidden; }
        .sw-role-row { display: grid; grid-template-columns: 165px minmax(0,1fr); }
        .sw-role-row + .sw-role-row { border-top: 1px solid var(--sw-line); }
        .sw-role-row strong { padding: 18px 20px; background: var(--sw-soft); font-size: 16px; font-weight: 600; }
        .sw-role-row span { padding: 18px 20px; color: var(--sw-copy); font-size: 16px; }
        .sw-security-callout { margin-top: 22px; padding: 20px; border-radius: 18px; background: var(--sw-blush); color: var(--sw-copy); font-size: 16px; }

        /* Versioning */
        .sw-version-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 64px; align-items: start; }
        .sw-version-card { padding: 30px; border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: #fff; }
        .sw-version-card h3 { margin: 0; font-size: 24px; font-weight: 600; }
        .sw-version-number { display: inline-flex; margin-top: 20px; padding: 10px 14px; border-radius: 12px; background: #1c2330; color: #fff; font: 600 14px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; }
        .sw-version-card p { margin: 18px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-version-timeline { position: relative; padding-left: 36px; }
        .sw-version-timeline::before { content: ""; position: absolute; left: 10px; top: 7px; bottom: 7px; width: 1px; background: #d9dee5; }
        .sw-version-step { position: relative; padding: 0 0 26px; }
        .sw-version-step:last-child { padding-bottom: 0; }
        .sw-version-step::before { content: ""; position: absolute; left: -31px; top: 6px; width: 11px; height: 11px; border-radius: 50%; background: var(--sw-magenta); box-shadow: 0 0 0 5px var(--sw-blush); }
        .sw-version-step strong { display: block; font-size: 17px; font-weight: 600; }
        .sw-version-step p { margin: 5px 0 0; color: var(--sw-copy); font-size: 16px; }

        /* Patterns */
        .sw-workflow-band { display: grid; grid-template-columns: 1.05fr .95fr; gap: 48px; align-items: center; margin-bottom: 42px; padding: 30px 34px; border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: var(--sw-soft); }
        .sw-workflow-band-copy .sw-eyebrow { margin-bottom: 10px; }
        .sw-workflow-band-copy h3 { margin: 0; font-size: 24px; line-height: 1.32; font-weight: 600; }
        .sw-workflow-band-copy p { margin: 10px 0 8px; color: var(--sw-copy); font-size: 16px; }
        .sw-workflow-types { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--sw-line); }
        .sw-workflow-types span { padding: 14px 12px 14px 0; border-bottom: 1px solid var(--sw-line); color: var(--sw-copy); font-size: 16px; }
        .sw-workflow-types span:nth-child(even) { padding-left: 16px; border-left: 1px solid var(--sw-line); }
        .sw-patterns { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--sw-line); }
        .sw-pattern { padding: 30px 30px 30px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-pattern:nth-child(3n + 2), .sw-pattern:nth-child(3n + 3) { padding-left: 30px; border-left: 1px solid var(--sw-line); }
        .sw-pattern h3 { margin: 18px 0 0; font-size: 22px; line-height: 1.35; font-weight: 600; }
        .sw-pattern p { margin: 10px 0 0; color: var(--sw-copy); font-size: 16px; }
        .sw-pattern code { display: block; margin-top: 16px; color: var(--sw-magenta-dark); font: 600 13px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace; overflow-wrap: anywhere; }

        /* Troubleshooting */
        .sw-table-wrap { overflow-x: auto; border: 1px solid var(--sw-line); border-radius: var(--sw-radius-lg); background: #fff; }
        .sw-trouble-table { width: 100%; min-width: 820px; border-collapse: collapse; }
        .sw-trouble-table th,
        .sw-trouble-table td { padding: 20px 22px; border-bottom: 1px solid var(--sw-line); text-align: left; vertical-align: top; }
        .sw-trouble-table th { background: var(--sw-soft); color: var(--sw-muted); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; }
        .sw-trouble-table td { color: var(--sw-copy); font-size: 16px; }
        .sw-trouble-table td:first-child { color: var(--sw-ink); font-weight: 600; }
        .sw-support-note { margin-top: 24px; display: flex; align-items: flex-start; gap: 14px; padding: 20px 22px; border-left: 3px solid var(--sw-magenta); background: #fff; }
        .sw-support-note svg { flex: 0 0 auto; color: var(--sw-magenta); margin-top: 2px; }
        .sw-support-note p { margin: 0; color: var(--sw-copy); font-size: 16px; }

        /* Checklist */
        .sw-checklist-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 60px; border-top: 1px solid var(--sw-line); }
        .sw-check-item { display: grid; grid-template-columns: 25px minmax(0,1fr); gap: 12px; padding: 17px 0; border-bottom: 1px solid var(--sw-line); color: var(--sw-copy); font-size: 16px; }
        .sw-check-item svg { color: var(--sw-magenta); margin-top: 2px; }

        /* FAQ */
        .sw-faq-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 70px; align-items: start; }
        .sw-faq-intro h2 { margin: 0; font-size: 36px; line-height: 1.16; font-weight: 600; letter-spacing: -.025em; }
        .sw-faq-intro p { margin: 20px 0 0; color: var(--sw-copy); font-size: 17px; }
        .sw-faq-panel { border-top: 1px solid var(--sw-line); }
        .sw-faq-item { border-bottom: 1px solid var(--sw-line); }
        .sw-faq-button { width: 100%; display: grid; grid-template-columns: minmax(0,1fr) 34px; gap: 18px; align-items: center; padding: 23px 0; border: 0; background: transparent; color: var(--sw-ink); font-size: 18px; line-height: 1.45; font-weight: 600; text-align: left; cursor: pointer; }
        .sw-faq-plus { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--sw-line); color: var(--sw-magenta); font-size: 20px; font-weight: 400; }
        .sw-faq-answer { padding: 0 46px 23px 0; color: var(--sw-copy); font-size: 16px; line-height: 1.7; }

        /* Related */
        .sw-related-list { border-top: 1px solid var(--sw-line); }
        .sw-related-row { display: grid; grid-template-columns: .78fr 1.35fr auto; gap: 28px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--sw-line); }
        .sw-related-row h3 { margin: 0; font-size: 20px; font-weight: 600; }
        .sw-related-row p { margin: 0; color: var(--sw-copy); font-size: 16px; }
        .sw-related-row .sw-link { white-space: nowrap; }

        /* Final CTA */
        .sw-final-cta { padding: 84px 0 96px; background: #fff; }
        .sw-cta-panel { position: relative; overflow: hidden; padding: 66px; border: 1px solid #eedbe4; border-radius: var(--sw-radius-lg); background: var(--sw-blush); }
        .sw-cta-panel::after { content: ""; position: absolute; width: 310px; height: 310px; border-radius: 50%; right: 0; bottom: 0; transform: translate(40%, 52%); background: rgba(193,29,99,.09); }
        .sw-cta-content { position: relative; z-index: 1; max-width: 820px; }
        .sw-cta-panel h2 { margin: 0; font-size: 38px; line-height: 1.16; letter-spacing: -.025em; font-weight: 600; }
        .sw-cta-panel p { margin: 20px 0 0; max-width: 720px; color: var(--sw-copy); font-size: 18px; }
        .sw-cta-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }

        @media (max-width: 1180px) {
          .sw-container { padding-inline: 40px; }
          .sw-hero-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .sw-proof-grid { grid-template-columns: repeat(2, 1fr); }
          .sw-proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--sw-line); }
          .sw-proof-item:nth-child(4) { border-top: 1px solid var(--sw-line); }
          .sw-flow { grid-template-columns: repeat(3, 1fr); }
          .sw-flow-step:nth-child(4) { border-left: 0; border-top: 1px solid #dfe3e8; }
          .sw-flow-step:nth-child(5), .sw-flow-step:nth-child(6) { border-top: 1px solid #dfe3e8; }
          .sw-patterns { grid-template-columns: repeat(2,1fr); }
          .sw-pattern:nth-child(3n + 2), .sw-pattern:nth-child(3n + 3) { padding-left: 0; border-left: 0; }
          .sw-pattern:nth-child(even) { padding-left: 30px; border-left: 1px solid var(--sw-line); }
        }

        @media (max-width: 900px) {
          .sw-container { padding-inline: 24px; }
          .sw-section { padding: 80px 0; }
          .sw-section--dense { padding: 72px 0; }
          .sw-section-header h2,
          .sw-standalone-title,
          .sw-overview-copy h2,
          .sw-signature-copy h2,
          .sw-reliability-copy h2,
          .sw-faq-intro h2 { font-size: 32px; }
          .sw-hero { padding: 88px 0 48px; }
          .sw-hero-grid,
          .sw-overview-grid,
          .sw-quick-grid,
          .sw-endpoint-grid,
          .sw-structure-grid,
          .sw-signature-grid,
          .sw-reliability-grid,
          .sw-testing-grid,
          .sw-monitor-grid,
          .sw-security-grid,
          .sw-version-grid,
          .sw-faq-layout { grid-template-columns: 1fr; gap: 48px; }
          .sw-hero h1 { font-size: 42px; }
          .sw-event-visual { min-height: auto; }
          .sw-flow { grid-template-columns: repeat(2, 1fr); }
          .sw-flow-step:nth-child(3), .sw-flow-step:nth-child(5) { border-left: 0; }
          .sw-flow-step:nth-child(3) { border-top: 1px solid #dfe3e8; }
          .sw-flow-step:nth-child(4) { border-left: 1px solid #dfe3e8; }
          .sw-rotation { grid-template-columns: 1fr; }
          .sw-rotation-step { display: grid; grid-template-columns: 58px minmax(0,1fr); gap: 18px; text-align: left; padding: 20px 0; }
          .sw-rotation-step + .sw-rotation-step { border-top: 1px solid var(--sw-line); }
          .sw-rotation-step + .sw-rotation-step::before { display: none; }
          .sw-rotation-badge { margin: 0; }
          .sw-retry-rows { grid-template-columns: repeat(2,1fr); }
          .sw-trouble-table { min-width: 0; }
          .sw-retry-cell:nth-child(n) { border-left: 0; }
          .sw-retry-cell:nth-child(even) { border-left: 1px solid var(--sw-line); }
          .sw-metric-grid { grid-template-columns: repeat(2,1fr); }
          .sw-metric:nth-child(3) { border-left: 0; border-top: 1px solid var(--sw-line); }
          .sw-metric:nth-child(4) { border-top: 1px solid var(--sw-line); }
          .sw-workflow-band { grid-template-columns: 1fr; gap: 28px; }
          .sw-event-grid { grid-template-columns: 1fr; }
          .sw-event-group,
          .sw-event-group:nth-child(even) { padding: 28px 0; border-left: 0; }
          .sw-related-row { grid-template-columns: 1fr; gap: 8px; align-items: start; }
          .sw-related-row .sw-link { margin-top: 4px; }
          .sw-cta-panel { padding: 52px 44px; }
          .sw-cta-panel h2 { font-size: 34px; }
        }

        @media (max-width: 640px) {
          .sw-container { padding-inline: 20px; }
          .sw-section { padding: 68px 0; }
          .sw-section--dense { padding: 64px 0; }
          .sw-section-header { margin-bottom: 38px; }
          .sw-section-header h2,
          .sw-standalone-title,
          .sw-overview-copy h2,
          .sw-signature-copy h2,
          .sw-reliability-copy h2,
          .sw-faq-intro h2 { font-size: 30px; }
          .sw-copy,
          .sw-overview-copy p,
          .sw-signature-copy > p,
          .sw-reliability-copy > p,
          .sw-faq-intro p { font-size: 16px; }
          .sw-lead { font-size: 18px; }
          .sw-hero { padding: 72px 0 42px; }
          .sw-hero h1 { font-size: 38px; line-height: 1.1; }
          .sw-hero-grid { gap: 40px; }
          .sw-hero-actions { display: grid; grid-template-columns: 1fr; }
          .sw-button { width: 100%; }
          .sw-event-visual { padding: 20px; border-radius: 24px; }
          .sw-pipeline-node { grid-template-columns: 42px minmax(0,1fr); padding: 15px; }
          .sw-node-badge { grid-column: 2; justify-self: start; }
          .sw-pipeline-icon { width: 42px; height: 42px; }
          .sw-pipeline-node + .sw-pipeline-node::before { left: 41px; }
          .sw-payload-strip { font-size: 12px; overflow-wrap: anywhere; white-space: normal; }
          .sw-proof-grid { grid-template-columns: 1fr; }
          .sw-proof-item + .sw-proof-item { border-left: 0; border-top: 1px solid var(--sw-line); }
          .sw-local-nav-inner { min-height: 58px; gap: 22px; }
          .sw-use-list { grid-template-columns: 1fr; }
          .sw-compare-head { display: none; }
          .sw-compare-row { display: block; padding: 4px 0; }
          .sw-compare-row + .sw-compare-row { border-top: 1px solid var(--sw-line); }
          .sw-compare-row p,
          .sw-compare-row p + p { position: static; padding: 15px 18px; border: 0; }
          .sw-compare-row p::before { content: attr(data-label); position: static; display: block; width: auto; margin-bottom: 6px; color: var(--sw-ink); font-size: 14px; line-height: 1.45; font-weight: 600; }
          .sw-compare-row p + p { background: #fcf8fa; }
          .sw-compare-row p + p::before { color: var(--sw-magenta); }
          .sw-flow { grid-template-columns: 1fr; border-top: 1px solid #dfe3e8; }
          .sw-flow-step { padding: 24px 4px 24px 58px; min-height: 0; }
          .sw-flow-step + .sw-flow-step,
          .sw-flow-step:nth-child(n) { border-left: 0; border-top: 1px solid #dfe3e8; }
          .sw-flow-step:first-child { border-top: 0; }
          .sw-flow-icon { position: absolute; left: 0; top: 22px; width: 42px; height: 42px; margin: 0; }
          .sw-flow-index { top: 24px; right: 2px; }
          .sw-quick-row { grid-template-columns: 40px minmax(0,1fr); }
          .sw-code-head { gap: 10px; align-items: flex-start; }
          .sw-code-status { display: none; }
          .sw-code-panel pre, .sw-signature-code pre { font-size: 13px; }
          .sw-endpoint-row { grid-template-columns: 1fr; gap: 8px; }
          .sw-endpoint-name span { white-space: normal; text-overflow: clip; }
          .sw-status-pill { justify-self: start; }
          .sw-field-row { grid-template-columns: 1fr; gap: 6px; }
          .sw-event-toolbar { align-items: flex-start; flex-direction: column; }
          .sw-event-grid { grid-template-columns: 1fr; }
          .sw-event-group,
          .sw-event-group:nth-child(even) { padding: 26px 0; border-left: 0; }
          .sw-tabs { border-radius: 14px 14px 0 0; }
          .sw-rotation-step { grid-template-columns: 50px minmax(0,1fr); }
          .sw-rotation-badge { width: 48px; height: 48px; }
          .sw-response-row { grid-template-columns: 1fr; }
          .sw-response-row strong { border-bottom: 1px solid var(--sw-line); }
          .sw-redelivery-band { padding: 22px 20px; }
          .sw-redelivery-facts { grid-template-columns: 1fr; }
          .sw-redelivery-facts div,
          .sw-redelivery-facts div + div { padding: 16px 0; border-left: 0; border-bottom: 1px solid #e5d5dd; }
          .sw-redelivery-facts div:last-child { border-bottom: 0; padding-bottom: 0; }
          .sw-test-options { grid-template-columns: 1fr; }
          .sw-form-row { grid-template-columns: 1fr; gap: 6px; }
          .sw-console-head { flex-wrap: wrap; }
          .sw-console-form { padding: 20px 18px; }
          .sw-console-result { margin-inline: 18px; overflow: hidden; }
          .sw-result-line { display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: start; gap: 12px; }
          .sw-result-line strong { max-width: 112px; overflow-wrap: normal; word-break: normal; }
          .sw-metric-grid { grid-template-columns: 1fr; }
          .sw-metric + .sw-metric,
          .sw-metric:nth-child(n) { border-left: 0; border-top: 1px solid var(--sw-line); }
          .sw-metric:first-child { border-top: 0; }
          .sw-monitor-board { overflow: hidden; }
          .sw-board-top { align-items: flex-start; flex-direction: column; }
          .sw-delivery-table,
          .sw-delivery-table tbody,
          .sw-delivery-table tr,
          .sw-delivery-table td { display: block; width: 100%; }
          .sw-delivery-table thead { display: none; }
          .sw-delivery-table tr { padding: 10px 0; border-bottom: 1px solid var(--sw-line); }
          .sw-delivery-table tr:last-child { border-bottom: 0; }
          .sw-delivery-table td { display: grid; grid-template-columns: 92px minmax(0,1fr); gap: 12px; padding: 6px 18px; border: 0; font-size: 16px; }
          .sw-delivery-table td::before { content: attr(data-label); color: var(--sw-muted); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; }
          .sw-delivery-table td:first-child { color: var(--sw-ink); }
          .sw-delivery-table code { font-size: 14px; }
          .sw-role-row { grid-template-columns: 1fr; }
          .sw-role-row strong { border-bottom: 1px solid var(--sw-line); }
          .sw-workflow-band { padding: 24px 20px; }
          .sw-workflow-types { grid-template-columns: 1fr; }
          .sw-workflow-types span,
          .sw-workflow-types span:nth-child(even) { padding: 13px 0; border-left: 0; }
          .sw-patterns { grid-template-columns: 1fr; }
          .sw-pattern,
          .sw-pattern:nth-child(even),
          .sw-pattern:nth-child(3n + 2),
          .sw-pattern:nth-child(3n + 3) { padding: 26px 0; border-left: 0; }
          .sw-table-wrap { overflow: hidden; }
          .sw-trouble-table,
          .sw-trouble-table tbody,
          .sw-trouble-table tr,
          .sw-trouble-table td { display: block; width: 100%; }
          .sw-trouble-table { min-width: 0; }
          .sw-trouble-table thead { display: none; }
          .sw-trouble-table tr { padding: 12px 0; border-bottom: 1px solid var(--sw-line); }
          .sw-trouble-table tr:last-child { border-bottom: 0; }
          .sw-trouble-table td { position: static; padding: 9px 18px; border: 0; min-height: 0; }
          .sw-trouble-table td::before { content: attr(data-label); position: static; display: block; width: auto; margin-bottom: 4px; color: var(--sw-muted); font-size: 12px; line-height: 1.45; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; }
          .sw-trouble-table td:first-child { color: var(--sw-ink); }
          .sw-checklist-grid { grid-template-columns: 1fr; gap: 0; }
          .sw-faq-answer { padding-right: 0; }
          .sw-related-row { padding: 22px 0; }
          .sw-final-cta { padding: 64px 0 72px; }
          .sw-cta-panel { padding: 42px 24px; border-radius: 24px; }
          .sw-cta-panel h2 { font-size: 30px; }
          .sw-standalone-h3, .sw-version-card h3, .sw-event-group h3, .sw-pattern h3 { font-size: 20px; }
          .sw-cta-panel p { font-size: 17px; }
          .sw-cta-actions { display: grid; grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="sw-hero">
        <div className="sw-container">
          <div className="sw-hero-grid">
            <div>
              <Eyebrow>Developer Platform</Eyebrow>
              <h1>Webhooks</h1>
              <p className="sw-lead">
                Receive secure, signed events when Stepes translation projects, jobs, reviews, approvals,
                exceptions, and deliveries change. Subscribe to the events your application needs and connect
                asynchronous translation workflows to your content, product, and business systems.
              </p>
              <div className="sw-hero-actions">
                <a className="sw-button sw-button--primary" href={`${CANONICAL}#quickstart`}>
                  Set Up a Webhook <Arrow />
                </a>
                <a className="sw-button sw-button--secondary" href={`${CANONICAL}#event-types`}>
                  View Event Types
                </a>
              </div>
              <div className="sw-hero-text-link">
                <a className="sw-link" href="https://www.stepes.com/developers/translation-api/project-status/">
                  View Translation API Project Status <Arrow />
                </a>
              </div>
            </div>

            <div className="sw-event-visual" aria-label="Webhook event delivery flow illustration">
              <div className="sw-visual-head">
                <div className="sw-window-dots"><span /><span /><span /></div>
                <div className="sw-visual-status"><i /> Endpoint healthy</div>
              </div>
              <div className="sw-pipeline">
                <div className="sw-pipeline-node">
                  <div className="sw-pipeline-icon"><Icon name="project" /></div>
                  <div><strong>Translation project completed</strong><small>Project prj_01J8Z4YQ</small></div>
                  <span className="sw-node-badge">Event created</span>
                </div>
                <div className="sw-pipeline-node">
                  <div className="sw-pipeline-icon"><Icon name="shield" /></div>
                  <div><strong>Signed HTTPS event</strong><small>HMAC-SHA256 · timestamp protected</small></div>
                  <span className="sw-node-badge">Verified</span>
                </div>
                <div className="sw-pipeline-node">
                  <div className="sw-pipeline-icon"><Icon name="queue" /></div>
                  <div><strong>Your endpoint and durable queue</strong><small>204 acknowledgement · asynchronous processing</small></div>
                  <span className="sw-node-badge">Accepted</span>
                </div>
              </div>
              <div className="sw-payload-strip">translation.project.completed → /webhooks/stepes</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-proof-strip" aria-label="Webhook platform highlights">
        <div className="sw-container">
          <div className="sw-proof-grid">
            {heroProof.map(([icon, title, text]) => (
              <div className="sw-proof-item" key={title}>
                <FeatureIcon icon={icon} />
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="sw-local-nav" aria-label="Webhooks page sections">
        <div className="sw-container sw-local-nav-inner">
          {pageNav.map(([label, anchor]) => (
            <a key={anchor} href={`${CANONICAL}#${anchor}`}>{label}</a>
          ))}
        </div>
      </nav>

      <section className="sw-section" id="overview">
        <div className="sw-container">
          <div className="sw-overview-grid">
            <div className="sw-overview-copy">
              <h2>Automate Translation Workflows With Event-Driven Updates</h2>
              <p>
                Translation workflows often continue after the initial API request. Files may require preparation,
                content may move through AI translation or professional human translation, reviewers may need to
                provide feedback, and multilingual deliverables may become available at different times.
              </p>
              <p>
                Stepes webhooks notify your application as these workflow events occur, so your systems can respond
                without repeatedly checking every active project.
              </p>
              <ul className="sw-use-list">
                {[
                  "Update project records",
                  "Notify reviewers",
                  "Retrieve deliverables",
                  "Resume build workflows",
                  "Escalate exceptions",
                  "Synchronize dashboards",
                ].map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}
              </ul>
            </div>
            <div>
              <div className="sw-compare" aria-label="Polling compared with webhooks">
                <div className="sw-compare-head"><div>Repeated Polling</div><div>Stepes Webhooks</div></div>
                {[
                  ["Your application repeatedly requests status.", "Stepes sends an event after a subscribed change."],
                  ["Updates depend on the polling interval.", "Events are delivered shortly after they are created."],
                  ["Requests continue when nothing changed.", "Requests occur only for relevant workflow events."],
                  ["Your application initiates every check.", "Stepes initiates the event notification."],
                  ["Useful for current-state retrieval.", "Useful for workflow automation and timely response."],
                ].map(([polling, webhooks]) => (
                  <div className="sw-compare-row" key={polling}>
                    <p data-label="Repeated Polling">{polling}</p>
                    <p data-label="Stepes Webhooks">{webhooks}</p>
                  </div>
                ))}
              </div>
              <div className="sw-overview-note">
                <strong>Webhooks and API resources work together.</strong> Use events to know that something changed,
                then retrieve the latest Stepes resource when your application requires authoritative current state.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--soft">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Delivery Model"
            title="From Translation Event to Application Action"
            copy="Stepes uses one consistent delivery process across project, review, approval, exception, job, file, and delivery events."
            align="center"
          />
          <div className="sw-flow">
            {deliveryFlow.map(([icon, title, text], index) => (
              <div className="sw-flow-step" key={title}>
                <span className="sw-flow-index">0{index + 1}</span>
                <div className="sw-flow-icon"><Icon name={icon} /></div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--dark" id="quickstart">
        <div className="sw-container">
          <SectionHeader
            title="Receive Your First Stepes Event"
            copy="Create an endpoint, subscribe to a workflow event, and validate a signed test delivery before enabling production traffic."
            dark
          />
          <div className="sw-quick-grid">
            <div className="sw-quick-list">
              {quickSteps.map(([title, copy], index) => (
                <div className="sw-quick-row" key={title}>
                  <div className="sw-quick-number">{index + 1}</div>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </div>
              ))}
              <div className="sw-success-callout"><Icon name="check" /><span>Your endpoint is ready to receive secure Stepes webhook events.</span></div>
            </div>
            <div className="sw-code-stack">
              <CodePanel title="Create a webhook endpoint" label="Request" dark>{`POST /v2/webhook-endpoints
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "url": "https://example.com/webhooks/stepes",
  "description": "Translation test endpoint",
  "environment": "test",
  "event_types": [
    "translation.project.completed",
    "translation.project.failed",
    "translation.delivery.ready"
  ],
  "event_schema_version": "2026-07-01"
}`}</CodePanel>
              <CodePanel title="Successful acknowledgement" label="Response" dark>{`HTTP/1.1 204 No Content`}</CodePanel>
              <a className="sw-link sw-link--dark" href="https://www.stepes.com/developers/translation-api/reference/#webhooks">
                Open the Webhook API Reference <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-endpoint-grid">
            <div className="sw-dashboard" aria-label="Webhook endpoint management example">
              <div className="sw-dashboard-toolbar"><strong>Webhook Endpoints</strong><span className="sw-mini-button">Create endpoint</span></div>
              {[
                ["Production translation events", "https://api.example.com/webhooks/stepes", "Active", "2 min ago"],
                ["Localization test events", "https://hooks.example.com/stepes-test", "Test", "18 min ago"],
                ["Delivery automation", "https://ops.example.com/stepes/delivery", "Active", "1 hr ago"],
              ].map(([name, url, status, time]) => (
                <div className="sw-endpoint-row" key={name}>
                  <div className="sw-endpoint-name"><strong>{name}</strong><span>{url}</span></div>
                  <span className={`sw-status-pill${status === "Test" ? " sw-status-pill--test" : ""}`}>{status}</span>
                  <span className="sw-delivery-meta">Last success<br />{time}</span>
                </div>
              ))}
            </div>
            <div>
              <Eyebrow>Endpoint Management</Eyebrow>
              <h2 className="sw-standalone-title">Configure Webhooks for Your Applications and Environments</h2>
              <p className="sw-copy">
                Create separate endpoints for different applications, departments, environments, or workflow responsibilities.
                Manage them through the Stepes customer portal or the Webhook Endpoints API.
              </p>
              <div className="sw-editorial-list">
                {[
                  ["environment", "Separate Test and Live", "Keep endpoint records, signing secrets, event data, delivery logs, credentials, and alerts fully isolated."],
                  ["filter", "Select Specific Event Types", "Subscribe each endpoint only to the project, review, approval, exception, delivery, job, or file events it can process."],
                  ["key", "Rotate Credentials Safely", "Generate replacement secrets, validate overlapping signatures, and revoke previous credentials without interrupting delivery."],
                  ["audit", "Control and Audit Changes", "Apply role-based permissions and record endpoint edits, tests, redeliveries, rotations, and enable or disable actions."],
                ].map(([icon, title, copy]) => (
                  <div className="sw-editorial-row" key={title}><FeatureIcon icon={icon} /><div><strong>{title}</strong><p>{copy}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--soft">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Event Structure"
            title="A Consistent Structure for Every Event"
            copy="Every Stepes webhook uses a common event envelope so your application can identify, route, log, validate, and process translation workflow events consistently."
          />
          <div className="sw-structure-grid">
            <CodePanel title="translation.project.completed" label="Event payload">{`{
  "specversion": "1.0",
  "id": "evt_01J8Z5T6M5A4K2QH7B9R3C1D0E",
  "source": "https://api.stepes.com/v2/projects/prj_01J8Z4YQ",
  "type": "translation.project.completed",
  "subject": "projects/prj_01J8Z4YQ",
  "time": "2026-07-21T16:20:00Z",
  "datacontenttype": "application/json",
  "dataschema": "https://www.stepes.com/developers/webhooks/schemas/translation.project.completed/1",
  "stepesenvironment": "live",
  "stepesschemaversion": "1",
  "data": {
    "project_id": "prj_01J8Z4YQ",
    "status": "completed",
    "resource_version": 42,
    "resource_url": "https://api.stepes.com/v2/projects/prj_01J8Z4YQ",
    "completed_at": "2026-07-21T16:20:00Z"
  }
}`}</CodePanel>
            <div>
              <div className="sw-field-list">
                {[
                  ["id", "Immutable event identifier used for duplicate protection across retries and redeliveries."],
                  ["type", "Stable event name that identifies what happened and determines the data schema."],
                  ["subject", "Related project, job, review, exception, file, approval, or delivery resource."],
                  ["time", "Time the underlying workflow event occurred, not the delivery-attempt time."],
                  ["dataschema", "Canonical schema reference for validating the event payload."],
                  ["stepesenvironment", "Identifies whether the event came from the test or live environment."],
                  ["data", "Event-specific identifiers, status, resource version, timestamps, and authoritative API URL."],
                ].map(([field, copy]) => <div className="sw-field-row" key={field}><code>{field}</code><p>{copy}</p></div>)}
              </div>
              <div className="sw-thin-note">
                <strong>Thin, secure event payloads</strong>
                <p>
                  Webhooks contain the context needed to understand and route a workflow change. Source files,
                  translated files, complete translation content, credentials, and large binary resources remain
                  behind authenticated API operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section" id="event-types">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Event Catalog"
            title="Subscribe Only to the Translation Events You Need"
            copy="Event names describe completed facts and use a stable hierarchical format. Select individual events or supported event families for each endpoint."
          />
          <div className="sw-event-toolbar">
            <div className="sw-filter-group" role="group" aria-label="Filter event types">
              {["All Events", "Projects", "Reviews & Approvals", "Exceptions", "Deliveries", "Jobs", "Files"].map((filter) => (
                <button
                  className={`sw-filter-button${eventFilter === filter ? " is-active" : ""}`}
                  type="button"
                  key={filter}
                  aria-pressed={eventFilter === filter}
                  onClick={() => setEventFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="sw-availability">Availability, schemas, and examples are maintained in the event reference.</div>
          </div>
          <div className="sw-event-grid">
            {filteredGroups.map((group) => (
              <article className="sw-event-group" key={group.title}>
                <div className="sw-event-group-head"><FeatureIcon icon={group.icon} /><h3>{group.title}</h3></div>
                {group.events.map(([event, copy]) => (
                  <div className="sw-event-entry" key={event}><code>{event}</code><span>{copy}</span></div>
                ))}
              </article>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <a className="sw-link" href="https://www.stepes.com/developers/translation-api/reference/#webhook-events">
              Browse the Complete Event Reference <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--dark" id="signatures">
        <div className="sw-container">
          <div className="sw-signature-grid">
            <div className="sw-signature-copy">
              <Eyebrow dark>Signature Verification</Eyebrow>
              <h2>Verify Every Webhook Before Processing It</h2>
              <p>
                Every Stepes webhook is cryptographically signed so your application can verify its origin and detect
                changes to the request. Verification uses the event ID, delivery timestamp, raw request body, and the
                endpoint signing secret.
              </p>
              <div className="sw-verification-list">
                {[
                  "Read the unchanged request-body bytes.",
                  "Read webhook-id, webhook-timestamp, and webhook-signature.",
                  "Reject timestamps outside the recommended five-minute tolerance.",
                  "Construct the signing input from the ID, timestamp, and raw body.",
                  "Calculate the HMAC-SHA256 signature.",
                  "Compare signatures with a constant-time function.",
                  "Parse and queue the event only after successful verification.",
                ].map((text, index) => (
                  <div className="sw-verify-row" key={text}><span className="sw-verify-index">0{index + 1}</span><p>{text}</p></div>
                ))}
              </div>
            </div>
            <div>
              <div className="sw-tabs" role="tablist" aria-label="Signature verification code examples">
                {Object.keys(signatureSnippets).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    role="tab"
                    id={`sw-tab-${lang.replace(/[^a-z0-9]/gi, "").toLowerCase()}`}
                    aria-controls="sw-signature-panel"
                    aria-selected={activeLang === lang}
                    className={`sw-tab${activeLang === lang ? " is-active" : ""}`}
                    onClick={() => setActiveLang(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <div
                className="sw-signature-code"
                id="sw-signature-panel"
                role="tabpanel"
                aria-labelledby={`sw-tab-${activeLang.replace(/[^a-z0-9]/gi, "").toLowerCase()}`}
              ><pre><code>{signatureSnippets[activeLang]}</code></pre></div>
              <div className="sw-signature-note">
                <strong>Use the raw request body.</strong> Parsing and reserializing JSON can change whitespace,
                escaping, encoding, or property representation and cause valid signature verification to fail.
              </div>
              <div style={{ marginTop: 18 }}>
                <a className="sw-link sw-link--dark" href="https://www.stepes.com/developers/webhooks/signature-verification/">
                  View Complete Verification Examples <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--dense">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Credential Rotation"
            title="Rotate Signing Secrets Without Interrupting Delivery"
            copy="Stepes supports overlapping signatures so you can deploy a replacement secret, validate it in production, and revoke the previous credential without downtime."
            align="center"
          />
          <div className="sw-rotation">
            {[
              ["key", "Generate", "Create a new endpoint signing secret."],
              ["database", "Store", "Add the new secret to your secure configuration."],
              ["code", "Deploy", "Update every receiving application instance."],
              ["shield", "Verify Both", "Accept either active signature during overlap."],
              ["check", "Revoke", "Remove the previous secret after validation."],
            ].map(([icon, title, copy]) => (
              <div className="sw-rotation-step" key={title}>
                <div className="sw-rotation-badge"><Icon name={icon} /></div>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--soft" id="delivery">
        <div className="sw-container">
          <div className="sw-reliability-grid">
            <div className="sw-reliability-copy">
              <h2>Design for Reliable At-Least-Once Delivery</h2>
              <p>
                Events can be delivered more than once, delayed by network conditions, or arrive in a different order
                from the underlying workflow changes. Build handlers that remain safe under all of these normal conditions.
              </p>
              <div className="sw-principles">
                {[
                  ["Store Event IDs", "Use webhook-id as the stable idempotency identifier across retries and manual redelivery."],
                  ["Process Idempotently", "Reprocessing the same event must not create duplicate business actions."],
                  ["Avoid Ordering Assumptions", "Compare resource versions and retrieve current API state when order matters."],
                  ["Acknowledge Promptly", "Verify, queue, and return a 2xx response within 15 seconds."],
                ].map(([title, copy]) => (
                  <div className="sw-principle" key={title}><Icon name="check" size={22} /><div><strong>{title}</strong><p>{copy}</p></div></div>
                ))}
              </div>
            </div>
            <div>
              <div className="sw-retry-panel">
                <div className="sw-retry-head"><strong>Automatic Retry Schedule</strong><span>Approximate delays with randomized jitter · approximately 75 hours total</span></div>
                <div className="sw-retry-rows">
                  {retryRows.map(([attempt, delay]) => <div className="sw-retry-cell" key={attempt}><strong>Attempt {attempt}</strong><span>{delay}</span></div>)}
                </div>
              </div>
              <div className="sw-response-matrix">
                {[
                  ["200–299", "Delivery succeeds and no automatic retry is required."],
                  ["300–399", "Delivery fails; redirects are not followed."],
                  ["400, 401, 403, 404", "Delivery fails and remains eligible for retry."],
                  ["410 Gone", "The endpoint is disabled."],
                  ["408, 429, 5xx", "Delivery fails and is retried."],
                  ["Network / TLS", "Connection, DNS, certificate, and timeout failures are retried."],
                ].map(([status, behavior]) => <div className="sw-response-row" key={status}><strong>{status}</strong><span>{behavior}</span></div>)}
              </div>
            </div>
          </div>
          <div className="sw-redelivery-band">
            <div className="sw-redelivery-copy">
              <Eyebrow>Manual Redelivery</Eyebrow>
              <h3>Recover a Missed Event Without Creating a New Business Event</h3>
              <p>Authorized users can redeliver an event after correcting an endpoint or downstream outage.</p>
            </div>
            <div className="sw-redelivery-facts">
              <div><strong>Same Event ID</strong><span>The original event and payload remain unchanged.</span></div>
              <div><strong>New Delivery ID</strong><span>Every attempt is recorded independently.</span></div>
              <div><strong>Fresh Signature</strong><span>The new attempt receives a current timestamp and signature.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section" id="testing">
        <div className="sw-container">
          <div className="sw-testing-grid">
            <div>
              <Eyebrow>Webhook Testing</Eyebrow>
              <h2 className="sw-standalone-title">Validate Your Integration Before Going Live</h2>
              <p className="sw-copy">
                Use signed test events to evaluate your complete receiving workflow without exposing live translation project data.
                Select a scenario to review the expected validation, response, and recovery behavior.
              </p>
              <div className="sw-test-options">
                {testScenarios.map((scenario, index) => (
                  <button
                    type="button"
                    aria-pressed={selectedTest === index}
                    className={`sw-test-option${selectedTest === index ? " is-active" : ""}`}
                    onClick={() => setSelectedTest(index)}
                    key={scenario}
                  ><i />{scenario}</button>
                ))}
              </div>
            </div>
            <div className="sw-test-console" aria-label="Webhook test event console example">
              <div className="sw-console-head"><strong>Send Test Event</strong><span className="sw-console-run">Run test</span></div>
              <div className="sw-console-form">
                <div className="sw-form-row"><label>Endpoint</label><div className="sw-field-mock"><span>Translation test endpoint</span><span>⌄</span></div></div>
                <div className="sw-form-row"><label>Event type</label><div className="sw-field-mock"><span>translation.project.completed</span><span>⌄</span></div></div>
                <div className="sw-form-row"><label>Scenario</label><div className="sw-field-mock"><span>{testScenarios[selectedTest]}</span><span>⌄</span></div></div>
                <div className="sw-form-row"><label>Schema version</label><div className="sw-field-mock"><span>2026-07-01</span><span>⌄</span></div></div>
              </div>
              <div className="sw-console-result" aria-live="polite">
                {testResults[testScenarios[selectedTest]].map(([label, value, tone]) => (
                  <div className="sw-result-line" key={label}>
                    <span>{label}</span>
                    <strong className={`sw-result-value sw-result-value--${tone}`}>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--soft" id="monitoring">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Delivery Visibility"
            title="See What Stepes Sent and How Your Endpoint Responded"
            copy="Delivery history helps your team validate integrations, investigate failures, recover from outages, and monitor endpoint health across test and live environments."
          />
          <div className="sw-monitor-grid">
            <div className="sw-monitor-board" aria-label="Webhook delivery history example">
              <div className="sw-board-top">
                <div><strong>Production translation events</strong><span className="sw-example-label">Example delivery activity</span></div>
                <span className="sw-health"><i /> Healthy</span>
              </div>
              <div className="sw-metric-grid">
                <div className="sw-metric"><span>Success rate</span><strong>99.8%</strong></div>
                <div className="sw-metric"><span>Median latency</span><strong>182 ms</strong></div>
                <div className="sw-metric"><span>Deliveries today</span><strong>1,248</strong></div>
                <div className="sw-metric"><span>Pending retries</span><strong>3</strong></div>
              </div>
              <table className="sw-delivery-table">
                <thead><tr><th>Event</th><th>Status</th><th>Latency</th><th>Delivery ID</th></tr></thead>
                <tbody>
                  <tr><td data-label="Event">project.completed</td><td data-label="Status">204</td><td data-label="Latency">168 ms</td><td data-label="Delivery ID"><code>dlv_01J8Z6A8</code></td></tr>
                  <tr><td data-label="Event">delivery.ready</td><td data-label="Status">202</td><td data-label="Latency">241 ms</td><td data-label="Delivery ID"><code>dlv_01J8Z59Q</code></td></tr>
                  <tr><td data-label="Event">review.requested</td><td data-label="Status">500</td><td data-label="Latency">15.0 s</td><td data-label="Delivery ID"><code>dlv_01J8Z41K</code></td></tr>
                  <tr><td data-label="Event">exception.resolved</td><td data-label="Status">204</td><td data-label="Latency">131 ms</td><td data-label="Delivery ID"><code>dlv_01J8Z2YM</code></td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="sw-standalone-h3">Endpoint Health States</h3>
              <div className="sw-health-list">
                {[
                  ["healthy", "Healthy", "Recent deliveries are succeeding normally."],
                  ["degraded", "Degraded", "Repeated failures or elevated latency require attention."],
                  ["failing", "Failing", "Recent delivery attempts are consistently unsuccessful."],
                  ["disabled", "Disabled", "Stepes is no longer attempting new deliveries."],
                ].map(([state, title, copy]) => (
                  <div className="sw-health-item" key={state}><span className={`sw-health-dot sw-health-dot--${state}`} /><div><strong>{title}</strong><p>{copy}</p></div></div>
                ))}
              </div>
              <div className="sw-notification-note">
                <strong>Failure notifications</strong>
                <p>Alert designated administrators when retries are exhausted, an endpoint begins failing, a certificate becomes invalid, or an endpoint is disabled.</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <a className="sw-link" href="https://www.stepes.com/developers/translation-api/reference/#webhook-deliveries">
                  View Delivery API Operations <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-security-grid">
            <div>
              <Eyebrow>Security and Governance</Eyebrow>
              <h2 className="sw-standalone-title">Enterprise Controls for Webhook Operations</h2>
              <p className="sw-copy">
                Manage event destinations, credentials, payload access, and operational activity across development and production environments.
              </p>
              <div className="sw-security-list">
                {[
                  ["lock", "Destination Protection", "Live endpoints require HTTPS and valid public certificates. Unsafe private, loopback, link-local, metadata, reserved, and redirect-based destinations are blocked."],
                  ["audit", "Audit History", "Record endpoint creation, edits, subscription changes, secret rotation, tests, redeliveries, permissions, and enable or disable actions."],
                  ["database", "Data Minimization", "Events include only the context needed to identify and respond to a workflow change. Documents and complete translation content remain behind authenticated APIs."],
                  ["monitor", "Source IP Controls", "Published outbound webhook IP ranges can support enterprise firewall rules as an additional control, not a replacement for signature verification."],
                ].map(([icon, title, copy]) => (
                  <div className="sw-security-row" key={title}><FeatureIcon icon={icon} /><div><strong>{title}</strong><p>{copy}</p></div></div>
                ))}
              </div>
            </div>
            <div>
              <div className="sw-role-panel">
                {[
                  ["Organization Owner", "Full webhook administration across the organization."],
                  ["Developer Admin", "Create, edit, test, rotate, redeliver, enable, and disable endpoints."],
                  ["Developer", "View, test, and manage permitted integrations."],
                  ["Security Admin", "Review configuration, rotate credentials, and access audit records."],
                  ["Viewer", "Read-only access to endpoint and delivery information."],
                ].map(([role, access]) => <div className="sw-role-row" key={role}><strong>{role}</strong><span>{access}</span></div>)}
              </div>
              <div className="sw-security-callout">
                Signing secrets, API credentials, cookies, authorization values, and other sensitive fields are never displayed in delivery history or audit details.
              </div>
              <div style={{ marginTop: 22 }}>
                <a className="sw-link" href="https://www.stepes.com/developers/security/">Review Developer Security <Arrow /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--blush">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Event Versioning"
            title="Keep Integrations Stable as Event Schemas Evolve"
            copy="Pin each endpoint to a documented schema version, test new versions before upgrading, and keep breaking changes separate from backward-compatible additions."
          />
          <div className="sw-version-grid">
            <div className="sw-version-card">
              <FeatureIcon icon="version" />
              <h3 style={{ marginTop: 22 }}>Endpoint-Pinned Schema Version</h3>
              <span className="sw-version-number">2026-07-01</span>
              <p>
                The pinned version governs event fields, data types, required properties, nullability, nested structures,
                enumerated values, and event-specific payload schemas.
              </p>
              <p>
                Consumers should ignore unknown JSON properties so backward-compatible additions do not interrupt processing.
              </p>
            </div>
            <div className="sw-version-timeline">
              {[
                ["Current Version", "Continue processing events against the endpoint’s pinned schema."],
                ["New Version Available", "Review the changelog, compatibility notes, and migration guide."],
                ["Test Before Upgrading", "Send signed test events using the proposed schema version."],
                ["Upgrade the Endpoint", "Change the pinned version after application validation."],
                ["Previous Version Retires", "Receive advance notice and a published retirement date for generally available versions."],
              ].map(([title, copy]) => <div className="sw-version-step" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Integration Patterns"
            title="Connect Webhook Events Across Your Content Architecture"
            copy="Use one event layer to coordinate multilingual content workflows across publishing, product development, software delivery, review, approval, exception management, and enterprise operations."
          />
          <div className="sw-workflow-band">
            <div className="sw-workflow-band-copy">
              <Eyebrow>AI and Human Workflows</Eyebrow>
              <h3>One Event Layer Across Automated and Professional Translation</h3>
              <p>Use the same project, review, approval, exception, and delivery event model while Stepes applies the workflow appropriate for your content and quality requirements.</p>
              <a className="sw-link" href="https://www.stepes.com/ai-human-translation-workflow/">Explore AI + Human Translation Workflows <Arrow /></a>
            </div>
            <div className="sw-workflow-types" aria-label="Supported translation workflow types">
              {["AI translation", "Professional translation", "Post-editing", "Linguistic review", "Subject-matter review", "Customer approval"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="sw-patterns">
            {[
              ["project", "Content Management and Publishing", "Retrieve approved localized content and continue editorial, publishing, or market-release workflows.", "translation.project.completed"],
              ["code", "Software and Application Localization", "Connect localization activity to repositories, build pipelines, release systems, and application platforms.", "translation.delivery.ready"],
              ["database", "Product and E-Commerce Content", "Update multilingual product information in PIM, commerce, catalog, and digital asset systems.", "translation.approval.completed"],
              ["users", "Review and Approval", "Notify reviewers and stakeholders when content requires attention and continue processing after completion.", "translation.review.requested"],
              ["retry", "Delivery Automation", "Retrieve multilingual outputs, transfer files, update downstream systems, or initiate publishing.", "translation.delivery.completed"],
              ["alert", "Exception Management", "Route workflow exceptions to operational teams and resume automation after resolution.", "translation.exception.resolved"],
            ].map(([icon, title, copy, event]) => (
              <article className="sw-pattern" key={title}><FeatureIcon icon={icon} /><h3>{title}</h3><p>{copy}</p><code>{event}</code></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--soft" id="troubleshooting">
        <div className="sw-container">
          <SectionHeader
            title="Resolve Common Webhook Problems"
            copy="Use delivery details, event identifiers, endpoint health, and the related API resource to diagnose integration problems without exposing credentials or customer content."
          />
          <div className="sw-table-wrap">
            <table className="sw-trouble-table">
              <thead><tr><th>Problem</th><th>Likely Cause</th><th>Recommended Resolution</th></tr></thead>
              <tbody>
                {troubleshootingRows.map(([problem, cause, resolution]) => (
                  <tr key={problem}>
                    <td data-label="Problem">{problem}</td>
                    <td data-label="Likely Cause">{cause}</td>
                    <td data-label="Recommended Resolution">{resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sw-support-note">
            <Icon name="alert" />
            <p>
              Include the endpoint ID, event ID, delivery ID, environment, approximate occurrence time, response status,
              and a concise description in support requests. Never send signing secrets, API credentials, or sensitive payload data.
            </p>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--dense">
        <div className="sw-container">
          <SectionHeader
            title="Prepare Your Webhook Integration for Production"
            copy="Complete this operational checklist before enabling live event delivery for your translation workflows."
            align="center"
          />
          <div className="sw-checklist-grid">
            {[
              "Use HTTPS with a valid public certificate.",
              "Verify every webhook signature.",
              "Verify the unchanged raw request body.",
              "Reject stale delivery timestamps.",
              "Use constant-time signature comparison.",
              "Store secrets in a secure secret manager.",
              "Restrict webhook-management permissions.",
              "Separate test and live endpoints.",
              "Subscribe only to required events.",
              "Queue verified events durably.",
              "Return a 2xx response within 15 seconds.",
              "Store event IDs for duplicate protection.",
              "Make every handler idempotent.",
              "Avoid depending on event arrival order.",
              "Retrieve current API state when needed.",
              "Monitor failed deliveries and queue backlogs.",
              "Test signing-secret rotation.",
              "Configure endpoint health notifications.",
              "Review delivery and audit history.",
              "Validate failure and recovery procedures.",
            ].map((item) => <div className="sw-check-item" key={item}><Icon name="check" size={20} /><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--soft">
        <div className="sw-container">
          <div className="sw-faq-layout">
            <div className="sw-faq-intro">
              <h2>Stepes Webhook Questions</h2>
              <p>
                Review delivery behavior, verification, retries, event ordering, payload security, environment separation,
                schema versioning, and operational recovery.
              </p>
              <div style={{ marginTop: 24 }}><a className="sw-link" href="https://www.stepes.com/contact-us/">Contact Developer Support <Arrow /></a></div>
            </div>
            <div className="sw-faq-panel">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                const panelId = `sw-faq-answer-${index}`;
                return (
                  <div className="sw-faq-item" key={question}>
                    <button
                      className="sw-faq-button"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{question}</span><span className="sw-faq-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? <div className="sw-faq-answer" id={panelId}>{answer}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <SectionHeader
            eyebrow="Related Documentation"
            title="Continue Building With Stepes"
            copy="Move from webhook implementation to translation project creation, status retrieval, API reference operations, integration architecture, and developer security."
          />
          <div className="sw-related-list">
            {relatedDocs.map(([title, copy, url]) => (
              <div className="sw-related-row" key={title}>
                <h3>{title}</h3><p>{copy}</p><a className="sw-link" href={url}>View {title} <Arrow /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-final-cta">
        <div className="sw-container">
          <div className="sw-cta-panel">
            <div className="sw-cta-content">
              <h2>Build Reliable Event-Driven Translation Workflows</h2>
              <p>
                Connect your applications to secure Stepes events and automate translation project updates, reviews,
                approvals, exceptions, and multilingual content delivery.
              </p>
              <div className="sw-cta-actions">
                <a className="sw-button sw-button--primary" href={`${CANONICAL}#quickstart`}>Get Started With Webhooks <Arrow /></a>
                <a className="sw-button sw-button--secondary" href="https://www.stepes.com/contact-us/">Talk to an Integration Specialist</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StepesWebhooksWireframe;
