const HomeModel = {
  getMensaje: async function () {
    const res = await fetch('/api/mensaje');
    if (res.ok) {
      return await res.json();
    } else {
      console.error('Error al obtener el mensaje de la API');
    }
  },
};

export default HomeModel;
