import { Editor, ReactRenderer } from "@tiptap/react";
import tippy, { Instance } from "tippy.js";

import MentionList from "./MentionList";
import { MentionOptions } from "@tiptap/extension-mention";
import { searchProducts } from "@/services/ProductAPI";
import { RefAttributes } from "react";

const suggestion: MentionOptions["suggestion"] = {
  items: async ({ query }: { query: string }) => {
    if (query === "") {
      return [];
    }

    const response = await searchProducts(query);
    if (response.ok === false) {
      return [];
    }

    return response.products.map((product) => product.name).slice(0, 10);
  },

  // @ts-ignore
  render: () => {
    let component: ReactRenderer<
      unknown,
      { items: string[]; command: any } & RefAttributes<unknown>
    >;
    let popup: Instance<any>[];

    return {
      onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
        component = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy("body", {
          getReferenceClientRect: () => props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props) {
        if (props.event.key === "Escape") {
          popup[0].hide();

          return true;
        }

        // @ts-ignore
        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};

export { suggestion };
