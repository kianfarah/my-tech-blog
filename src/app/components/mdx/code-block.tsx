import { CopyButton } from "./copy-button";

export function Pre({ children, ...props }: any) {
  return (
    <div className="relative group my-6">
      <CopyButton text={children?.props?.children || ""} />
      {/* Se till att pre inte har extra klasser som lägger till blå bakgrund */}
      <pre {...props} className="overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}