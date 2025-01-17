---
sidebar_label: ElementHandle.hover
---

# ElementHandle.hover() method

This method scrolls element into view if needed, and then uses [Page.mouse](./puppeteer.page.mouse.md) to hover over the center of the element. If the element is detached from DOM, the method throws an error.

**Signature:**

```typescript
class ElementHandle {
  hover(): Promise<void>;
}
```

**Returns:**

Promise&lt;void&gt;
