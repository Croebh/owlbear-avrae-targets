import OBR from "@owlbear-rodeo/sdk";
import { getExtensionId, nameDisplay } from "./utils";

const menu_id = getExtensionId("menu")

OBR.onReady(async () => {
  OBR.contextMenu.create({
    id: `${menu_id}/context-menu.distance`,
    icons: [
      {
        icon: "/avrae.svg",
        label: "Copy Avrae Targets",
        filter: {
          every: [{ key: "layer", value: "CHARACTER", coordinator: "||" },
                  { key: "layer", value: "MOUNT" }],
        },
      },
    ],
    onClick(context) {
      let targets = context.items.map((item) => nameDisplay(item))
      let targetString = targets.join(" ")
      prompt("Copy to clipboard: Ctrl+C, Enter", targetString)
    },
  });
});
