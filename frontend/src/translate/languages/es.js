const messages = {
	es: {
		translations: {
			signup: {
				title: "Registro",
				toasts: {
					success: "¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
					fail: "Error creando el usuario. Verifica la data reportada.",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Regístrate",
					login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
				},
			},
			login: {
				title: "Inicio de Sesión",
				form: {
					email: "Correo Electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Ingresa",
					register: "¿No tienes cuenta? ¡Regístrate!",
				},
			},
			companies: { // Start Need Translate
				title: "Registrar Empresa",
				form: {
					name: "Nombre de la empresa",
					plan: "Plan",
					token: "Token",
					submit: "Registrar",
					success: "Empresa creada con éxito!",
				}, // End Need Translate
			},
			auth: {
				toasts: {
					success: "¡Inicio de sesión exitoso!",
				},
				token: "Token",
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Tickets hoy: ",
					},
				},
			},
			connections: {
				title: "Conexiones",
				toasts: {
					deleted: "¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
					disconnectTitle: "Desconectar",
					disconnectMessage: "Estás seguro? Deberá volver a leer el código QR",
				},
				buttons: {
					add: "Agrega WhatsApp",
					disconnect: "Desconectar",
					tryAgain: "Inténtalo de nuevo",
					qrcode: "QR CODE",
					newQr: "Nuevo QR CODE",
					connecting: "Conectando",
				},
				toolTips: {
					disconnected: {
						title: "No se pudo iniciar la sesión de WhatsApp",
						content: "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
					},
					qrcode: {
						title: "Esperando la lectura del código QR",
						content: "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
					},
					connected: {
						title: "Conexión establecida",
					},
					timeout: {
						title: "Se perdió la conexión con el teléfono celular",
						content: "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
					},
				},
				table: {
					name: "Nombre",
					status: "Estado",
					lastUpdate: "Última Actualización",
					default: "Por Defecto",
					actions: "Acciones",
					session: "Sesión",
				},
			},
			whatsappModal: {
				title: {
					add: "Agrega WhatsApp",
					edit: "Edita WhatsApp",
				},
				form: {
					name: "Nombre",
					default: "Por Defecto",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "WhatsApp guardado satisfactoriamente.",
			},
			qrCode: {
				message: "Lée el código QR para empezar la sesión.",
			},
			contacts: {
				title: "Contactos",
				toasts: {
					deleted: "¡Contacto borrado satisfactoriamente!",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
					deleteTitle: "Borrar",
					importTitlte: "Importar contactos",
					deleteMessage: "¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
					importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
				},
				buttons: {
					import: "Importar Contactos",
					add: "Agregar Contacto",
				},
				table: {
					name: "Nombre",
					whatsapp: "WhatsApp",
					email: "Correo Electrónico",
					actions: "Acciones",
				},
			},
			contactModal: {
				title: {
					add: "Agregar contacto",
					edit: "Editar contacto",
				},
				form: {
					mainInfo: "Detalles del contacto",
					extraInfo: "Información adicional",
					name: "Nombre",
					number: "Número de Whatsapp",
					email: "Correo Electrónico",
					extraName: "Nombre del Campo",
					extraValue: "Valor",
				},
				buttons: {
					addExtraInfo: "Agregar información",
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Contacto guardado satisfactoriamente.",
			},
			queueModal: {
				title: {
					add: "Agregar cola",
					edit: "Editar cola",
				},
				form: {
					name: "Nombre",
					color: "Color",
					greetingMessage: "Mensaje de saludo",
					complationMessage: "Mensaje de finalización", // Start Need translate
					outOfHoursMessage: "Mensaje fuera de horario",
					ratingMessage: "Mensaje de evaluación", // End Need translate
					token: "Token",
				},
				buttons: {
					okAdd: "Añadir",
					okEdit: "Ahorrar",
					cancel: "Cancelar",
				},
			},
			userModal: {
				title: {
					add: "Agregar usuario",
					edit: "Editar usuario",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
					profile: "Perfil",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Usuario guardado satisfactoriamente.",
			},
			scheduleModal: { // Start Need Translate
				title: {
					add: "Nueva programación",
					edit: "Editar horario",
				},
				form: {
					body: "Mensaje",
					contact: "Contacto",
					sendAt: "Data de Agendamento",
					sentAt: "Data de Envio",
				},
				buttons: {
					okAdd: "Adicionar",
					okEdit: "Salvar",
					cancel: "Cancelar",
				},
				success: "Programación guardada con éxito.",
			},
			tagModal: {
				title: {
					add: "Nueva etiqueta",
					edit: "Editar etiqueta",
				},
				form: {
					name: "Nombre",
					color: "Color",
				},
				buttons: {
					okAdd: "Adicionar",
					okEdit: "Salvar",
					cancel: "Cancelar",
				},
				success: "Etiqueta guardada con éxito.",
			}, // End Need Translate
			chat: {
				noTicketMessage: "Selecciona un ticket para empezar a chatear.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "Nuevo",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Lineas",
			},
			tickets: {
				toasts: {
					deleted: "El ticket en el que estabas ha sido borrado.",
				},
				notification: {
					message: "Mensaje de",
				},
				tabs: {
					open: {
						title: "Bandeja"
					},
					closed: {
						title: "Resueltos"
					},
					search: {
						title: "Buscar"
					},
				},
				search: {
					placeholder: "Buscar tickets y mensajes.",
				},
				buttons: {
					showAll: "Todos",
				},
			},
			transferTicketModal: {
				title: "Transferir Ticket",
				fieldLabel: "Escriba para buscar usuarios",
				fieldQueueLabel: "Transferir para fila", // Start Need Translate
				fieldQueuePlaceholder: "Seleccionar una fila", // End need translate
				noOptions: "No se encontraron usuarios con ese nombre",
				buttons: {
					ok: "Transferir",
					cancel: "Cancelar",
				},
			},
			ticketsList: {
				pendingHeader: "Cola",
				assignedHeader: "Trabajando en",
				noTicketsTitle: "¡Nada acá!",
				noTicketsMessage: "No se encontraron tickets con este estado o término de búsqueda",
				buttons: {
					accept: "Aceptar",
				},
			},
			newTicketModal: {
				title: "Crear Ticket",
				fieldLabel: "Escribe para buscar un contacto",
				add: "Añadir",
				buttons: {
					ok: "Guardar",
					cancel: "Cancelar",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Tablero", //Start Need Translate
					connections: "Conexiones",
					tickets: "Atenciones",
					quickMessages: "Respuestas rápidas",
					contacts: "Contactos",
					queues: "Filas & Chatbot",
					tags: "Tags",
					administration: "Administración",
					users: "Usuários",
					settings: "Ajustes",
					helps: "Ayuda",
					messagesAPI: "API",
					schedules: "Horarios",
					campaigns: "Campañas",
					annoucements: "Boletines",
					chats: "Chat Interno", //End Need Translate
				},
				appBar: {
					user: {
						profile: "Perfil",
						logout: "Cerrar Sesión",
					},
				},
			},
			messagesAPI: { //Start Need Translate
				title: "API",
				textMessage: {
					number: "Número",
					body: "Mensaje",
					token: "Token cadastrado",
				},
				mediaMessage: {
					number: "Número",
					body: "Nome do arquivo",
					media: "Arquivo",
					token: "Token registrado",
				}, //End Need Translate
			},
			notifications: {
				noTickets: "Sin notificaciones.",
			},
			quickMessages: { //Start Need Translate
				title: "Respostas Rápidas",
				buttons: {
					add: "Nueva respuesta",
				},
				dialog: {
					shortcode: "Atajo",
					message: "Responder",
				},
			},
			contactLists: {
				title: "Listas de Contatos",
				table: {
					name: "Nombre",
					contacts: "Contactos",
					actions: "Comportamiento",
				},
				buttons: {
					add: "Nueva Lista",
				},
				dialog: {
					name: "Nombre",
					company: "Empresa",
					okEdit: "Editar",
					okAdd: "Adicionar",
					add: "Adicionar",
					edit: "Editar",
					cancel: "Cancelar",
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
					deleted: "Registro excluído",
				},
			},
			contactListItems: {
				title: "Contactos",
				searchPlaceholder: "Búsqueda",
				buttons: {
					add: "Nuevo",
					lists: "Listas",
					import: "Importar",
				},
				dialog: {
					name: "Nombre",
					number: "Número",
					whatsapp: "Whatsapp",
					email: "E-mail",
					okEdit: "Editar",
					okAdd: "Adicionar",
					add: "Adicionar",
					edit: "Editar",
					cancel: "Cancelar",
				},
				table: {
					name: "Nombre",
					number: "Número",
					whatsapp: "Whatsapp",
					email: "E-mail",
					actions: "Comportamiento",
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta acción no se puede revertir.",
					importMessage: "Quieres importar contactos de esta hoja de calculo? ",
					importTitlte: "Importar",
				},
				toasts: {
					deleted: "Registro excluído",
				},
			},
			campaigns: {
				title: "Campañas",
				searchPlaceholder: "Búsqueda",
				buttons: {
					add: "Nueva Campaña",
					contactLists: "Listas de Contactos",
				},
				table: {
					name: "Nombre",
					whatsapp: "Conexion",
					contactList: "Lista de Contactos",
					status: "Estado",
					scheduledAt: "PLanificacion",
					completedAt: "Concluída",
					confirmation: "Confirmación",
					actions: "Comportamiento",
				},
				dialog: {
					new: "Nueva Campaña",
					update: "Editar Campaña",
					readonly: "Solo vista",
					form: {
						name: "Nome",
						message1: "Mensaje 1",
						message2: "Mensaje 2",
						message3: "Mensaje 3",
						message4: "Mensaje 4",
						message5: "Mensaje 5",
						confirmationMessage1: "Mensaje de confirmación 1",
						confirmationMessage2: "Mensaje de confirmación 2",
						confirmationMessage3: "Mensaje de confirmación 3",
						confirmationMessage4: "Mensaje de confirmación 4",
						confirmationMessage5: "Mensaje de confirmación 5",
						messagePlaceholder: "Contenido del mensaje",
						whatsapp: "Conexion",
						status: "Estado",
						scheduledAt: "Planificación",
						confirmation: "Confirmación",
						contactList: "Lista de Contacto",
					},
					buttons: {
						add: "Adicionar",
						edit: "Atualizar",
						okadd: "Ok",
						cancel: "Cancelar Disparos",
						restart: "Reiniciar Disparos",
						close: "Fechar",
						attach: "Adjuntar archivo",
					},
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "Esta acción no se puede revertir",
				},
				toasts: {
					success: "Operación realizada con éxito",
					cancel: "Campaña cancelada",
					restart: "Campaña reiniciada",
					deleted: "Registro eliminado",
				},
			},
			announcements: {
				title: "Publicacion",
				searchPlaceholder: "Búsqueda",
				buttons: {
					add: "Nuevo publicación",
					contactLists: "Listas de Informacion",
				},
				table: {
					priority: "Prioridad",
					title: "Titulo",
					text: "Texto",
					mediaName: "Archivo",
					status: "Estado",
					actions: "Comportamiento",
				},
				dialog: {
					edit: "Edición de informacion ",
					add: "Nueva Información",
					update: "Editar informacion",
					readonly: "Solo vista",
					form: {
						priority: "Prioridad",
						title: "Titulo",
						text: "Texto",
						mediaPath: "Archivo",
						status: "Estado",
					},
					buttons: {
						add: "Adicionar",
						edit: "Atualizar",
						okadd: "Ok",
						cancel: "Cancelar",
						close: "Fechar",
						attach: "Anexar Archivo",
					},
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
					success: "Operación realizada con éxito",
					deleted: "Registro eliminado",
				},
			},
			campaignsConfig: {
				title: "Configuration de la campaña",
			}, //End Need Translate
			queues: {
				title: "Lineas",
				table: {
					name: "Nombre",
					color: "Color",
					greeting: "Mensaje de saludo",
					actions: "Comportamiento",
				},
				buttons: {
					add: "Agregar cola",
				},
				confirmationModal: {
					deleteTitle: "Eliminar",
					deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
				},
			},
			queueSelect: {
				inputLabel: "Lineas",
			},
			users: {
				title: "Usuarios",
				table: {
					name: "Nombre",
					email: "Correo Electrónico",
					profile: "Perfil",
					actions: "Acciones",
				},
				buttons: {
					add: "Agregar usuario",
				},
				toasts: {
					deleted: "Usuario borrado satisfactoriamente.",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la cola.",
				},
			},
			helps: { // Start Need Translate
				title: "Central de Ayuda",
			},
			schedules: {
				title: "Horarios",
				confirmationModal: {
					deleteTitle: "Está seguro de que desea eliminar este programa?",
					deleteMessage: "Esta acción no se puede revertir.",
				},
				table: {
					contact: "Contacto",
					body: "Mensaje",
					sendAt: "fecha de agendamiento",
					sentAt: "fecha de Envio",
					status: "Estado",
					actions: "Comportamiento",
				},
				buttons: {
					add: "Nueva programación",
				},
				toasts: {
					deleted: "Cita eliminada con éxito.",
				},
			},
			tags: {
				title: "Etiquetas",
				confirmationModal: {
					deleteTitle: "¿Está seguro de que desea eliminar esta etiqueta?",
					deleteMessage: "Esta acción no se puede revertir.",
				},
				table: {
					name: "Nombre",
					color: "Color",
					tickets: "Registros etiquetados",
					actions: "Editar",
				},
				buttons: {
					add: "Nueva etiqueta",
				},
				toasts: {
					deleted: "Etiqueta eliminada con éxito.",
				},
			}, // End Need Translate
			settings: {
				success: "Configuración guardada satisfactoriamente.",
				title: "Configuración",
				settings: {
					userCreation: {
						name: "Creación de usuarios",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "Asignado a:",
					buttons: {
						return: "Devolver",
						resolve: "Resolver",
						reopen: "Reabrir",
						accept: "Aceptar",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Escribe un mensaje",
				placeholderClosed: "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
				signMessage: "Firmar",
			},
			contactDrawer: {
				header: "Detalles del contacto",
				buttons: {
					edit: "Editar contacto",
				},
				extraInfo: "Otra información",
			},
			ticketOptionsMenu: { // Start Need Translate
				schedule: "Agendamiento",
				delete: "Eliminar",
				transfer: "Transferir",
				registerAppointment: "Notas de contacto",
				appointmentsModal: {
					title: "Observaciones de Contato",
					textarea: "Observaciones",
					placeholder: "Ingresa los datos que deseas registrar aquí",
				},
				confirmationModal: {
					title: "Eliminar ticket de contacto",
					message: "Atención! Todos los mensajes relacionados con el ticket se perderán.",
				},
				buttons: {
					delete: "Excluir",
					cancel: "Cancelar",
				},
			},  // End Need Translate
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Cancelar",
				},
			},
			messageOptionsMenu: {
				delete: "Borrar",
				reply: "Responder",
				confirmationModal: {
					title: "¿Borrar mensaje?",
					message: "Esta acción no puede ser revertida.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP: "Debe haber al menos una conexión de WhatsApp predeterminada.",
				ERR_NO_DEF_WAPP_FOUND: "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
				ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
				ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
				ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
				ERR_WAPP_DOWNLOAD_MEDIA: "No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
				ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo.",
				ERR_SENDING_WAPP_MSG: "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
				ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
				ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
				ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
				ERR_USER_CREATION_DISABLED: "La creación de usuarios fue deshabilitada por el administrador.",
				ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
				ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
				ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
				ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
				ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
				ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
				ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
				ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
				ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
				ERR_FETCH_WAPP_MSG: "Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elija otro.",
				ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una cola.",
			},
		},
	},
};

export {
	messages
};
