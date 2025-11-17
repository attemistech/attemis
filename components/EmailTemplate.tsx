import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Mensagem recebida!</h1>

      <h3>Por: {name}</h3>
      <h3>Email: {email}</h3>

      <p>{message}</p>
    </div>
  );
}
