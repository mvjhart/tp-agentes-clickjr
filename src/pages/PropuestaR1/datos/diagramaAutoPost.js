// Código Mermaid del diagrama completo (Nivel 1 · AutoPost).
export const codigoDiagramaAutoPost = `flowchart TD
    A(["INICIO"]) --> B[/"DATOS DE ENTRADA:<br/>Nueva solicitud o respuesta de PostuAyuda<br/>Información de la persona y del empleo"/]

    B --> C["ACCIÓN:<br/>Revisar la solicitud y comprobar<br/>que se pueda continuar"]

    C --> D{"DECISIÓN:<br/>¿Se cumplen las condiciones básicas?"}

    D -->|No| E(["RESULTADO:<br/>No viable"])
    D -->|Sí| F{"DECISIÓN:<br/>¿Está todo completo para postularse?"}

    F -->|Sí| G["ACCIÓN:<br/>Volver a comprobar que el empleo<br/>siga disponible y que el permiso<br/>para postularse esté vigente"]
    F -->|No| H{"¿Se puede volver a pedir<br/>lo que falta?"}

    H -->|Sí| I["ACCIÓN:<br/>Pedir ayuda a PostuAyuda"]
    H -->|No| J(["RESULTADO:<br/>Revisión por una persona del equipo"])

    I --> K["Recibir la respuesta de PostuAyuda"]
    K --> L{"¿Qué respondió?"}

    L -->|Se completó todo| B
    L -->|No se puede continuar| E
    L -->|Venció el plazo| M(["RESULTADO:<br/>Vencido"])
    L -->|La persona rechazó| N(["RESULTADO:<br/>Rechazado"])

    G --> O{"¿Se puede realizar el envío?"}
    O -->|Sí| P(["RESULTADO:<br/>Enviado"])
    O -->|No, el empleo ya no está disponible| E
    O -->|No, se retiró el permiso| Q(["RESULTADO:<br/>Cancelado"])`
