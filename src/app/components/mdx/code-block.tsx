import { isValidElement, type ReactNode } from "react";
import { CopyButton } from "./copy-button";

/** Recursively pull plain text out of highlighted children (spans etc). */
function toText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return toText(node.props.children);
  return "";
}

export function Pre({ children, ...props }: React.ComponentProps<"pre">) {
  const code = isValidElement<{ className?: string }>(children) ? children : null;
  const language = code?.props.className
    ?.split(" ")
    .find((c) => c.startsWith("language-"))
    ?.replace("language-", "");

  return (
    <div className="code-block">
      {language && <span className="lang">{language}</span>}
      <CopyButton text={toText(children)} />
      <pre {...props}>{children}</pre>
    </div>
  );
}
