export default {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Service Name',
        },
        {
            name: 'variation',
            type: 'string',
            title: 'Variation'
        },
        {
            name: 'city_available',
            type: 'string',
            title: 'City Available'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Service Price',
        },
        {
            name: 'currently_offered',
            type: 'boolean',
            title: 'Currently Offered',
        },
        {
            name: 'pic',
            type: 'image',
            title: 'Service Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        },
        {
            name: 'services_list',
            type: 'array',
            title: 'Services List',
            of: [
                {
                    type: 'object',
                    name: 'service',
                    title: 'Service',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Service Name',
                        },
                        {
                            name: 'variation',
                            type: 'string',
                            title: 'Variation'
                        },
                        {
                            name: 'city_available',
                            type: 'string',
                            title: 'City Available'
                        },
                        {
                            name: 'price',
                            type: 'number',
                            title: 'Service Price',
                        },
                        {
                            name: 'currently_offered',
                            type: 'boolean',
                            title: 'Currently Offered',
                        },
                        {
                            name: 'pic',
                            type: 'image',
                            title: 'Service Image',
                            options: {
                                hotspot: true // Enables cropping and focal point selection
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
