export default {
  name: 'activity',
  title: 'Actividades',
  type: 'document',
  fields: [
    {
      name: 'activity',
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
      name: 'available',
      title: 'Available',
      type: 'boolean',
      required: true
    },
    {
      name: 'imagesActivities',
      title: 'Imagen Actividades',
      type: 'image'
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url'
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
