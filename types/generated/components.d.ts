import type { Schema, Struct } from '@strapi/strapi';

export interface AuthorAuthorName extends Struct.ComponentSchema {
  collectionName: 'components_author_author_names';
  info: {
    description: '';
    displayName: 'Author Details';
  };
  attributes: {
    authorDescription: Schema.Attribute.Text;
    authorImage: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String;
    authorRole: Schema.Attribute.String;
  };
}

export interface PostsPostMetaData extends Struct.ComponentSchema {
  collectionName: 'components_posts_post_meta_data';
  info: {
    description: '';
    displayName: 'Post MetaData';
  };
  attributes: {
    isFeatured: Schema.Attribute.Enumeration<['YES', 'NO']> &
      Schema.Attribute.DefaultTo<'NO'>;
    metaDescription: Schema.Attribute.Text;
    postTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    thumbnail: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface PostsPostPrimaryDetails extends Struct.ComponentSchema {
  collectionName: 'components_posts_post_primary_details';
  info: {
    description: '';
    displayName: 'Post Primary Details';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'BLOGGING',
        'BUSINESS',
        'EDUCATION',
        'FINANCE',
        'HOME & LIVING',
        'INTERVIEW',
        'LIFESTYLE',
        'MARKETING',
        'MOBILE ADVERTISING',
        'SEO',
        'TECHNOLOGY',
        'TRAVELLING',
      ]
    > &
      Schema.Attribute.Required;
    excerpt: Schema.Attribute.Text & Schema.Attribute.Required;
    featuredImage: Schema.Attribute.Media<'images'>;
    isDisplayAuthor: Schema.Attribute.Enumeration<['YES', 'NO']> &
      Schema.Attribute.DefaultTo<'YES'>;
    readTime: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'author.author-name': AuthorAuthorName;
      'posts.post-meta-data': PostsPostMetaData;
      'posts.post-primary-details': PostsPostPrimaryDetails;
    }
  }
}
