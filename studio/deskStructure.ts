import type { StructureResolver } from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site settings'),
        ),
      S.listItem()
        .title('Menu')
        .id('menuPage')
        .child(
          S.document()
            .schemaType('menuPage')
            .documentId('menuPage')
            .title('Menu'),
        ),
    ])
