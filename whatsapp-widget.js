/**
 * PACS - Premium Academic Consultancy Services
 * Dynamic Floating WhatsApp Widget (Fully Mobile Responsive Blueprint)
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Configure your details (Updated to your official hotline)
    const WHATSAPP_NUMBER = "971581064039"; 
    const DEFAULT_MESSAGE = encodeURIComponent(
        "Hello PACS Executive Team, I would like to schedule a personal profile review for studying in Germany."
    );

    // 2. Create CSS styling dynamically
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        .pacs-wa-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #128C7E;
            color: #FFFFFF;
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: 0 10px 25px rgba(18, 140, 126, 0.3);
            text-decoration: none;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            font-weight: 700;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid rgba(255, 255, 255, 0.1);
            white-space: nowrap;
        }

        .pacs-wa-widget:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(18, 140, 126, 0.5);
            background: #075E54;
            color: #FFFFFF;
        }

        .pacs-wa-icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            fill: currentColor;
            flex-shrink: 0;
        }

        @media (max-width: 768px) {
            .pacs-wa-widget {
                bottom: 20px;
                right: 20px;
                padding: 14px;
                border-radius: 50%;
                width: 54px;
                height: 54px;
            }
            .pacs-wa-text {
                display: none !important;
            }
            .pacs-wa-icon {
                margin-right: 0;
                width: 26px;
                height: 26px;
            }
        }
    `;
    document.head.appendChild(styleTag);

    // 3. Construct the Widget Element
    const waButton = document.createElement("a");
    waButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;
    waButton.target = "_blank";
    waButton.rel = "noopener noreferrer";
    waButton.className = "pacs-wa-widget";

    // SVG icon of WhatsApp
    waButton.innerHTML = `
        <svg class="pacs-wa-icon" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.002 5.291 5.3 0 11.8 0c3.148.002 6.11 1.229 8.334 3.457 2.225 2.229 3.45 5.19 3.447 8.337-.006 6.51-5.304 11.8-11.8 11.8-1.999-.001-3.962-.51-5.694-1.48L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.617-1.01-5.079-2.862-6.93C16.315 2.039 13.859 1.01 11.24 1.01 5.84 1.01 1.439 5.393 1.437 10.79c-.002 1.566.43 3.09 1.25 4.453l-.271.991-.98 3.58 3.676-.963.935.543zM16.55 14.8c-.27-.135-1.585-.78-1.83-.87-.24-.09-.415-.135-.585.135-.17.27-.66.87-.81 1.035-.15.18-.3.2-.57.065-.27-.135-1.14-.42-2.172-1.34-.803-.715-1.345-1.6-1.5-1.87-.15-.27-.015-.415.12-.55.125-.124.27-.315.405-.47.135-.155.18-.27.27-.45.09-.18.045-.34-.02-.475-.067-.135-.585-1.41-.8-1.93-.21-.51-.425-.44-.585-.45-.15-.01-.325-.01-.495-.01-.17 0-.44.065-.67.315-.23.25-.875.855-.875 2.085s.895 2.415.1 2.545c-1.1 1.45-2.68 2.22-3.83 2.51-.27.065-.515.1-.735.1-.38 0-.745-.045-1.01-.1-.28-.05-.44-.1-.58-.1-.14 0-.315-.05-.455-.135z"/>
        </svg>
        <span class="pacs-wa-text">Chat with Advisor</span>
    `;

    // 4. Inject into the body
    document.body.appendChild(waButton);
});
