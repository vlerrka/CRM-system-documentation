const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '1. Анализ требований',
      items: [
        'requirements/business-requirements',
        'requirements/stakeholders',
        'requirements/functional-requirements',
        'requirements/non-functional-requirements',
      ],
    },
    {
      type: 'category',
      label: '2. Архитектура и модели',
      items: [
        'architecture/conceptual-model',
        'architecture/logical-model',
        'architecture/physical-model',
        'architecture/event-storming',
        'architecture/bpmn',
        'architecture/sequence-diagram',
        'architecture/use-case-diagram',
      ],
    },
    {
      type: 'category',
      label: '3. API и OpenAPI',
      items: [
        'api/openapi-specification',
        'api/asyncapi',
      ],
    },
    {
      type: 'category',
      label: '4. Хранилища данных',
      items: [
        'storage/data-storage-selection',
        'storage/sql-scripts',
      ],
    },
    {
      type: 'category',
      label: '5. Платформизация',
      items: [
        'platform/platformization-strategy',
        'platform/technical-documentation',
      ],
    },
  ],
};

module.exports = sidebars;