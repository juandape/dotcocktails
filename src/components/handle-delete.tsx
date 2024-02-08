import axios from 'axios';
import Swal from 'sweetalert2';

const handleDelete = async (id: string, url: string, userRole: string) => {
  const result = await Swal.fire({
    icon: 'warning',
    title: '¿Estás seguro?',
    text: 'No podrás recuperar la historia una vez eliminado',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarla!',
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'X-User-Role': userRole,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Eliminado!',
        text: 'La historia ha sido eliminada.',
        timer: 1500,
      });
      location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la Eliminación!',
        text: `${(error as any).message},
               ${(error as any).response.data.message}`,
        showCloseButton: true,
      });
    }
  }
};

export default handleDelete;
