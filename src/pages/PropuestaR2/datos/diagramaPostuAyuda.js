// Código Mermaid del diagrama completo (Nivel 2 · PostuAyuda).
export const codigoDiagramaPostuAyuda = `flowchart TD
    A(["INICIO"]) --> B[/"DATOS DE ENTRADA:<br/>Pedido de AutoPost<br/>Datos de la persona y del empleo<br/>Faltantes detectados (F1, F2, F3)"/]
    B --> C["ACCIÓN:<br/>Registrar el caso y establecer<br/>un plazo para responder"]
    C --> D{"DECISIÓN:<br/>¿Se puede continuar con este<br/>empleo y esta persona?<br/>(B1, B2, B3)"}
    D -->|No| E(["RESULTADO:<br/>No viable (motivo B1/B2/B3)"])
    D -->|Sí| F["ACCIÓN:<br/>Pedir a la persona lo que falta<br/>(solicitud consolidada)"]
    F --> G{"¿Qué respondió<br/>la persona?"}
    G -->|Completó todo| H["ACCIÓN:<br/>Volver a comprobar B1, B2, B3"]
    G -->|Respondió parcial| I["ACCIÓN:<br/>Guardar lo recibido y pedir<br/>solamente lo que falta"]
    G -->|No respondió a tiempo| J["ACCIÓN:<br/>Volver a comprobar B1, B2, B3"]
    G -->|Rechazó| K(["RESULTADO:<br/>Rechazado"])
    I --> F
    H --> L{"¿Se puede continuar?"}
    J --> M{"¿Se puede continuar?"}
    L -->|Sí| N(["RESULTADO:<br/>Resuelto (vuelve a R1)"])
    L -->|No| E
    M -->|Sí| O(["RESULTADO:<br/>Vencido"])
    M -->|No| E`
