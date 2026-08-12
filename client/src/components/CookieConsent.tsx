import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "battatinis-cookie-consent";

type ConsentValue = "accepted" | "declined";

/**
 * Reads the stored consent choice. Returns null when the visitor has not
 * chosen yet, which is when the banner should be shown.
 */
function getStoredConsent(): ConsentValue | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    // localStorage can throw in private mode / blocked-cookie browsers.
    // Fail closed: treat as already handled so we never trap the visitor
    // in a banner that can't be dismissed.
    return "declined";
  }
}

function storeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Nothing we can do; the banner still closes for this session.
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) {
      // Small delay so the banner animates in after first paint rather than
      // competing with the hero for attention.
      const t = window.setTimeout(() => setVisible(true), 700);
      return () => window.clearTimeout(t);
    }
  }, []);

  function choose(value: ConsentValue) {
    storeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-4 animate-in slide-in-from-bottom duration-500"
    >
      <div className="container max-w-5xl">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-11 h-11 rounded-full bg-[#850100]/10 flex items-center justify-center shrink-0">
              <Cookie className="h-5 w-5 text-[#850100]" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="font-serif font-bold text-[#444444]">
                We value your privacy
              </p>
              <p className="text-[#444444]/75 text-base leading-relaxed">
                We use cookies to keep our site running smoothly and to
                understand how visitors find us. You can accept or decline
                anytime. Read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#850100] font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                to learn more.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              onClick={() => choose("declined")}
              variant="outline"
              className="border-[#850100] text-[#850100] hover:bg-[#850100]/5 font-semibold px-6"
            >
              Decline
            </Button>
            <Button
              onClick={() => choose("accepted")}
              className="bg-[#850100] hover:bg-[#660000] text-white font-bold px-6"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
