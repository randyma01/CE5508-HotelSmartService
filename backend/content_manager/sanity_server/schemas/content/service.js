export default {
  name: 'service',
  title: 'Servicios',
  type: 'document',
  fields: [
    {
      name: 'activitis',
      title: 'Nombre',
      type: 'string'
    },
    {
      name: 'tagURL',
      title: 'Tag URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'maxPeople',
      title: 'Máximo Personas',
      type: 'number',
      required: true
    },
    {
      name: 'minPeople',
      title: 'Mínimo Personas',
      type: 'number',
      required: true
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'string',
      required: true
    },
    {
      name: 'avaiable',
      title: 'Available',
      type: 'boolean',
      required: true
    },
    {
      name: 'imageUrl',
      title: 'Imagen',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'parents',
      title: 'Categorías',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }]
        }
      ]
    }
  ]
};
