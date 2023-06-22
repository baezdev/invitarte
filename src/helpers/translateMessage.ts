export const translateMessage = (message: string) => {
  const possibleMessages = [
    'Invalid login credentials',
    'Email not confirmed',
    'For security purposes, you can only request this after 35 seconds'
  ]

  const translatedMessages = [
    'Correo o contraseña incorrectos',
    'El correo no ha sido confirmado',
    'Por seguridad solo puede intentar cada 2 minutos'
  ]

  const searchMessage = possibleMessages.findIndex(val => val === message)

  return translatedMessages[searchMessage]
}