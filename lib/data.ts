import { Product, Video } from './types'

export const viralVideos: Video[] = [
  {
    id: 'video-1',
    title: 'La Merma Silenciosa en Bodega',
    description: 'Cómo el pan de caja, lácteos y productos vencidos se tragan tu ganancia sin darte cuenta.',
    views: '185K',
    likes: '32K',
    duration: '0:58',
    relatedProduct: 'Planilla Nego Control',
    gradientClass: 'from-blue-600 via-indigo-900 to-slate-950',
    videoUrl: '/ssstik.io_@rua7404_1779839352290.mp4'
  },
  {
    id: 'video-2',
    title: 'La Regla de Oro al FIAR',
    description: 'Si fías en Nicaragua, estás a un paso de quebrar. Don Rudy te explica la ley sagrada del pulpero.',
    views: '245K',
    likes: '48K',
    duration: '1:15',
    relatedProduct: 'E-book: El Pulpero Millonario',
    gradientClass: 'from-sky-500 via-blue-900 to-slate-950',
    videoUrl: '/ssstik.io_@rua7404_1779839389054.mp4'
  },
  {
    id: 'video-3',
    title: 'Mañas de los Proveedores',
    description: 'Distribuidores de pan, gaseosas y lácteos. Las 3 reglas obligatorias antes de pagarles a los camiones repartidores.',
    views: '140K',
    likes: '24K',
    duration: '0:48',
    relatedProduct: 'Mentoria uno a uno',
    gradientClass: 'from-blue-700 via-sky-950 to-slate-950',
    videoUrl: '/ssstik.io_@rua7404_1779839442332.mp4'
  }
]

export const products: Product[] = [
  {
    id: 'ebook-pulpero',
    name: 'Mini-Curso: El Pulpero Millonario',
    price: 350,
    priceOriginal: 700,
    description: 'El primer entrenamiento práctico en videos cortos de 5 minutos diseñado para dueños de negocios ocupados. Aprende a negociar con distribuidores, acomodar estantes y auditar tu caja.',
    iconType: 'video',
    tag: 'MÁS VENDIDO',
    benefits: [
      '15 videos prácticos explicados por Don Rudy listos para ver en celular',
      'Metodología exacta de negociación con distribuidores de gaseosas, pan y lácteos en Nicaragua',
      'Estrategias de compras de impulso para disparar ganancias de inmediato'
    ]
  },
  {
    id: 'software-nego-ia',
    name: 'Guía Práctica: Sistema "Nego Control" en PDF',
    price: 700,
    priceOriginal: 1400,
    description: 'El manual explicativo definitivo en PDF con plantillas impresas listas para rellenar a mano o digital. Aprende el paso a paso exacto para organizar tu bodega, reducir mermas y auditar stock.',
    iconType: 'pdf',
    tag: 'RECOMENDADO',
    benefits: [
      'Manual en PDF paso a paso listo para leer en celular o tableta',
      'Metodología exacta de Don Rudy para registrar entradas y salidas',
      'Plantillas de control físico listas para imprimir y colgar en bodega'
    ]
  },
  {
    id: 'mentoria-vip',
    name: 'Mentoría VIP Privada 1-a-1',
    price: 2800,
    priceOriginal: 5600,
    description: 'Videollamada privada de 1 hora directamente con Don Rudy. Analizaremos las finanzas, góndolas y fallas operativas de tu pulpería para darte un plan de acción concreto e inmediato.',
    iconType: 'users',
    tag: 'CUPOS LIMITADOS (3 AL MES)',
    benefits: [
      'Auditoría en vivo de tu local por videollamada',
      'Plan personalizado de optimización de bodega y exhibidores',
      'Acceso de por vida al grupo VIP de WhatsApp de Don Rudy'
    ]
  }
]

export const rudyResponses: { [key: string]: string } = {
  oxxo: '¡Mire compa! Para ganarle a los grandes supermercados el secreto NO está en pelear por precios centavo a centavo. ¡Ellos compran por millones! Tu superpoder es la CERCANÍA y el SERVICIO al vecino. Las cadenas no le fían a la vecina de confianza, no venden un huevo suelto, ni te atienden con una sonrisa sincera. Implementa pedidos por WhatsApp con entrega rápida en el barrio y mantén los refrescos helados de verdad. ¡La gente en Nicaragua compra por confianza y calidez!',
  cerveza: '¡Eso es oro en polvo, compa! El enfriador de refrescos y gaseosas es tu mayor activo pero consume mucha luz aquí en Nicaragua. Rótalo de forma estricta PEPS (Primeras Entradas, Primeras Salidas). Un refresco caliente que metes a enfriar varias veces pierde calidad y merma tu ganancia. Haz un conteo rápido diario del stock de tu heladera: una botella perdida al día son C$ 900 al mes que se esfuman sin darte cuenta.',
  proveedor: '¡Mucho ojo con esto! A los camiones repartidores hay que recibirlos con orden de compra en mano. Nunca permitas que ellos llenen tu anaquel con lo que ellos quieren vender si a ti se te queda rezagado en bodega. Negocia bonificaciones por volumen, exige cambios de producto dañado antes de pagar y ten limpia la zona de exhibición para ganarte su respeto.',
  general: '¡Eso es! La base de una pulpería rentable es el orden. Como yo siempre digo: "Antes de emprender hay que aprender". Si no llevas un registro diario de entradas y salidas de dinero en Córdobas, estás trabajando a ciegas compa. Separa las finanzas del negocio de las de la casa de inmediato y verás cómo empieza a sobrar capital.'
}

export const faqList = [
  {
    q: '¿Cómo puedo competir con éxito contra los supermercados gigantes y cadenas?',
    a: '¡Compa, el truco está en explotar lo que ellos jamás podrán hacer! Los supermercados grandes no le fían a la vecina de confianza, no venden un huevo suelto, no te entregan a domicilio en 5 minutos en el barrio, ni te atienden con un saludo sincero por tu nombre. Toma pedidos por WhatsApp con entregas veloces y conviértete en el amigo de los vecinos. ¡Ahí está el éxito!'
  },
  {
    q: '¿Cuál es el error número uno por el cual quiebran las pulperías?',
    a: '¡Mezclar la caja de la pulpería con el gasto diario de la casa! Agarran dinero de la venta de refrescos para comprar la comida familiar o pagar cosas ajenas, y cuando llega el camión repartidor no tienen efectivo para pagar. Se quedan sin surtir y los clientes se van. Separa tus cuentas de inmediato, ponte un salario fijo al mes y no toques la caja del negocio.'
  },
  {
    q: '¿Cómo controlo las mermas (productos vencidos en bodega)?',
    a: 'Lleva un control estricto PEPS (Primeras Entradas, Primeras Salidas). Coloca siempre al frente del estante las botellas o paquetes con vencimiento más corto. Audita una sección diferente de tu inventario cada semana (por ejemplo, galletas el lunes, lácteos el martes). Si quieres facilitarte la vida, usa mi sistema de plantillas "Nego Control".'
  },
  {
    q: '¿Qué hago si la gente del barrio se enoja cuando les cobro el fiado?',
    a: '¡Compa, en los negocios no hay espacio para la pena! Si fías por lástima, vas a quebrar por lástima. La regla sagrada es: coloca un letrero llamativo que diga "Hoy no fío, mañana sí". Si el cliente se molesta cuando vas a cobrar con amabilidad, es que no era un cliente real, era una fuga de dinero. ¡Quien te aprecia de verdad cuida tu negocio!'
  },
  {
    q: '¿Cómo calculo el precio correcto de un producto para no perder Córdobas?',
    a: 'Muchos pulperos creen que si compran a C$ 10 y venden a C$ 12 están ganando el 20%. ¡Falso! No están sumando la bolsa de plástico que regalan, la luz de la heladera, ni el producto que se vence. Para ganar el 20% real en abarrotes secos, debes dividir el costo entre 0.80. En helados y lácteos que gastan luz, sube un 5% extra para cubrir el consumo de energía.'
  },
  {
    q: 'El recibo de la luz me está saliendo carísimo, ¿qué hago con las refrigeradoras?',
    a: '¡Mire compa, apagar las heladoras en la noche para "ahorrar" es una gran mentira! Al encenderlas en la mañana, el motor trabaja el doble de esfuerzo para enfriar todo de nuevo y gasta más luz. Lo correcto es: 1) Mantén las rejillas traseras limpias para que ventilen bien, 2) Limita las aperturas (sirve tú mismo las gaseosas heladas), y 3) Revisa que los empaques de jebe sellen perfectamente.'
  }
]
