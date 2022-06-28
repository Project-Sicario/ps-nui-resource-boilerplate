on('ps-nui', data => {
  SetNuiFocus(data.toggle, data.toggle);
  SendNuiMessage(
    JSON.stringify({
      action: data.nui,
      toggle: data.toggle,
      data: data.data,
    }),
  );
});
