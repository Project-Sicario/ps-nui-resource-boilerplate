on("ps-nui", (nui, toggle) => {
  SetNuiFocus(toggle, toggle);
  SendNuiMessage(JSON.stringify({action: nui, data: toggle}));
})

setTimeout(() => {
  emit("ps-nui", "nui-test", true);
}, 3000);
