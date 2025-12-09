const BASE_URL = "https://69383ea14618a71d77cf83e3.mockapi.io/toTask/Task"; // Cambia el puerto si Mokapi usa otro
// Obtener todas las tareas
export async function getTasks() {
  const response = await fetch(BASE_URL);
  return response.json();
}

// Obtener una tarea por id
export async function getTaskById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}

// Crear una nueva tarea
export async function createTask(task) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
}

// Actualizar una tarea existente
export async function updateTask(id, task) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
}

// Eliminar una tarea
export async function deleteTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}