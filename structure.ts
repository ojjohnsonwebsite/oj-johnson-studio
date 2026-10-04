import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('OJ Johnson')
    .items([
      S.listItem()
        .title('Portfolio')
        .child(
          S.list()
            .title('Portfolio')
            .items([
              S.listItem()
                .title('Jewelry')
                .child(
                  S.documentTypeList('portfolioImage')
                    .title('Jewelry')
                    .filter('_type == "portfolioImage" && category == "jewelry"')
                ),
              S.listItem()
                .title('Sculpture')
                .child(
                  S.documentTypeList('portfolioImage')
                    .title('Sculpture')
                    .filter('_type == "portfolioImage" && category == "sculpture"')
                ),
            ])
        ),
      S.documentTypeListItem('videoProject').title('Video'),
      S.documentTypeListItem('musing').title('Musings'),
      S.divider(),
      S.listItem()
        .title('Site Information')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])
