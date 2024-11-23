type EmailTemplateProps = {
    firstName: string;
    email: string;
    phone: string;
    message: string;
};

export const EmailTemplate = ({ firstName, email, phone, message }: EmailTemplateProps) => {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", padding: "20px" }}>
            <h1 style={{ color: "#333" }}>Nouvelle demande de contact</h1>
            <p>
                <strong>Nom de l'entreprise :</strong> {firstName}
            </p>
            <p>
                <strong>Email :</strong> {email}
            </p>
            <p>
                <strong>Téléphone :</strong> {phone}
            </p>
            <p>
                <strong>Message :</strong>
            </p>
            <p>{message}</p>
        </div>
    );
};
