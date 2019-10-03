/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore
  var producto= parseInt(evt.data.nombre1) * parseInt(evt.data.nombre2) * parseInt(evt.data.nombre3);
  postMessage(`La multiplicación de ${evt.data.nombre1} por ${evt.data.nombre2} por ${evt.data.nombre3} es `+ producto);
};
