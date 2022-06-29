import React from "react"

export function UseState({ name }) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
  }, [loading])

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Escribe el código de seguridad</p>

      {error && <p>Error: Código incorrecto</p>}

      {loading && <p>Cargando...</p>}

      <input placeholder="Código de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  )
}
