import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AuthorScalarFieldEnumSchema = z.enum(['id','name','createdAt','modifiedAt']);

export const RelationLoadStrategySchema = z.enum(['query','join']);

export const BookScalarFieldEnumSchema = z.enum(['id','googleBookId','title','description','publishDate','imageLink','volumeLink','createdAt','modifiedAt']);

export const BookAuthorScalarFieldEnumSchema = z.enum(['id','authorId','bookId','createdAt','modifiedAt']);

export const ReviewScalarFieldEnumSchema = z.enum(['id','comment','bookId']);

export const HogeScalarFieldEnumSchema = z.enum(['id','name']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// AUTHOR SCHEMA
/////////////////////////////////////////

export const AuthorSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  modifiedAt: z.coerce.date(),
})

export type Author = z.infer<typeof AuthorSchema>

/////////////////////////////////////////
// AUTHOR PARTIAL SCHEMA
/////////////////////////////////////////

export const AuthorPartialSchema = AuthorSchema.partial()

export type AuthorPartial = z.infer<typeof AuthorPartialSchema>

// AUTHOR OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const AuthorOptionalDefaultsSchema = AuthorSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  modifiedAt: z.coerce.date().optional(),
}))

export type AuthorOptionalDefaults = z.infer<typeof AuthorOptionalDefaultsSchema>

// AUTHOR RELATION SCHEMA
//------------------------------------------------------

export type AuthorRelations = {
  bookAuthors: BookAuthorWithRelations[];
};

export type AuthorWithRelations = z.infer<typeof AuthorSchema> & AuthorRelations

export const AuthorWithRelationsSchema: z.ZodType<AuthorWithRelations> = AuthorSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorWithRelationsSchema).array(),
}))

// AUTHOR OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type AuthorOptionalDefaultsRelations = {
  bookAuthors: BookAuthorOptionalDefaultsWithRelations[];
};

export type AuthorOptionalDefaultsWithRelations = z.infer<typeof AuthorOptionalDefaultsSchema> & AuthorOptionalDefaultsRelations

export const AuthorOptionalDefaultsWithRelationsSchema: z.ZodType<AuthorOptionalDefaultsWithRelations> = AuthorOptionalDefaultsSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorOptionalDefaultsWithRelationsSchema).array(),
}))

// AUTHOR PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type AuthorPartialRelations = {
  bookAuthors?: BookAuthorPartialWithRelations[];
};

export type AuthorPartialWithRelations = z.infer<typeof AuthorPartialSchema> & AuthorPartialRelations

export const AuthorPartialWithRelationsSchema: z.ZodType<AuthorPartialWithRelations> = AuthorPartialSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorPartialWithRelationsSchema).array(),
})).partial()

export type AuthorOptionalDefaultsWithPartialRelations = z.infer<typeof AuthorOptionalDefaultsSchema> & AuthorPartialRelations

export const AuthorOptionalDefaultsWithPartialRelationsSchema: z.ZodType<AuthorOptionalDefaultsWithPartialRelations> = AuthorOptionalDefaultsSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorPartialWithRelationsSchema).array(),
}).partial())

export type AuthorWithPartialRelations = z.infer<typeof AuthorSchema> & AuthorPartialRelations

export const AuthorWithPartialRelationsSchema: z.ZodType<AuthorWithPartialRelations> = AuthorSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// BOOK SCHEMA
/////////////////////////////////////////

export const BookSchema = z.object({
  id: z.number().int(),
  googleBookId: z.string(),
  title: z.string(),
  description: z.string(),
  publishDate: z.string(),
  imageLink: z.string(),
  volumeLink: z.string(),
  createdAt: z.coerce.date(),
  modifiedAt: z.coerce.date(),
})

export type Book = z.infer<typeof BookSchema>

/////////////////////////////////////////
// BOOK PARTIAL SCHEMA
/////////////////////////////////////////

export const BookPartialSchema = BookSchema.partial()

export type BookPartial = z.infer<typeof BookPartialSchema>

// BOOK OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const BookOptionalDefaultsSchema = BookSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  modifiedAt: z.coerce.date().optional(),
}))

export type BookOptionalDefaults = z.infer<typeof BookOptionalDefaultsSchema>

// BOOK RELATION SCHEMA
//------------------------------------------------------

export type BookRelations = {
  bookAuthors: BookAuthorWithRelations[];
  review: ReviewWithRelations[];
};

export type BookWithRelations = z.infer<typeof BookSchema> & BookRelations

export const BookWithRelationsSchema: z.ZodType<BookWithRelations> = BookSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorWithRelationsSchema).array(),
  review: z.lazy(() => ReviewWithRelationsSchema).array(),
}))

// BOOK OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type BookOptionalDefaultsRelations = {
  bookAuthors: BookAuthorOptionalDefaultsWithRelations[];
  review: ReviewOptionalDefaultsWithRelations[];
};

export type BookOptionalDefaultsWithRelations = z.infer<typeof BookOptionalDefaultsSchema> & BookOptionalDefaultsRelations

export const BookOptionalDefaultsWithRelationsSchema: z.ZodType<BookOptionalDefaultsWithRelations> = BookOptionalDefaultsSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorOptionalDefaultsWithRelationsSchema).array(),
  review: z.lazy(() => ReviewOptionalDefaultsWithRelationsSchema).array(),
}))

// BOOK PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type BookPartialRelations = {
  bookAuthors?: BookAuthorPartialWithRelations[];
  review?: ReviewPartialWithRelations[];
};

export type BookPartialWithRelations = z.infer<typeof BookPartialSchema> & BookPartialRelations

export const BookPartialWithRelationsSchema: z.ZodType<BookPartialWithRelations> = BookPartialSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorPartialWithRelationsSchema).array(),
  review: z.lazy(() => ReviewPartialWithRelationsSchema).array(),
})).partial()

export type BookOptionalDefaultsWithPartialRelations = z.infer<typeof BookOptionalDefaultsSchema> & BookPartialRelations

export const BookOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BookOptionalDefaultsWithPartialRelations> = BookOptionalDefaultsSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorPartialWithRelationsSchema).array(),
  review: z.lazy(() => ReviewPartialWithRelationsSchema).array(),
}).partial())

export type BookWithPartialRelations = z.infer<typeof BookSchema> & BookPartialRelations

export const BookWithPartialRelationsSchema: z.ZodType<BookWithPartialRelations> = BookSchema.merge(z.object({
  bookAuthors: z.lazy(() => BookAuthorPartialWithRelationsSchema).array(),
  review: z.lazy(() => ReviewPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// BOOK AUTHOR SCHEMA
/////////////////////////////////////////

export const BookAuthorSchema = z.object({
  id: z.number().int(),
  authorId: z.number().int(),
  bookId: z.number().int(),
  createdAt: z.coerce.date(),
  modifiedAt: z.coerce.date(),
})

export type BookAuthor = z.infer<typeof BookAuthorSchema>

/////////////////////////////////////////
// BOOK AUTHOR PARTIAL SCHEMA
/////////////////////////////////////////

export const BookAuthorPartialSchema = BookAuthorSchema.partial()

export type BookAuthorPartial = z.infer<typeof BookAuthorPartialSchema>

// BOOK AUTHOR OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const BookAuthorOptionalDefaultsSchema = BookAuthorSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  modifiedAt: z.coerce.date().optional(),
}))

export type BookAuthorOptionalDefaults = z.infer<typeof BookAuthorOptionalDefaultsSchema>

// BOOK AUTHOR RELATION SCHEMA
//------------------------------------------------------

export type BookAuthorRelations = {
  author: AuthorWithRelations;
  book: BookWithRelations;
};

export type BookAuthorWithRelations = z.infer<typeof BookAuthorSchema> & BookAuthorRelations

export const BookAuthorWithRelationsSchema: z.ZodType<BookAuthorWithRelations> = BookAuthorSchema.merge(z.object({
  author: z.lazy(() => AuthorWithRelationsSchema),
  book: z.lazy(() => BookWithRelationsSchema),
}))

// BOOK AUTHOR OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type BookAuthorOptionalDefaultsRelations = {
  author: AuthorOptionalDefaultsWithRelations;
  book: BookOptionalDefaultsWithRelations;
};

export type BookAuthorOptionalDefaultsWithRelations = z.infer<typeof BookAuthorOptionalDefaultsSchema> & BookAuthorOptionalDefaultsRelations

export const BookAuthorOptionalDefaultsWithRelationsSchema: z.ZodType<BookAuthorOptionalDefaultsWithRelations> = BookAuthorOptionalDefaultsSchema.merge(z.object({
  author: z.lazy(() => AuthorOptionalDefaultsWithRelationsSchema),
  book: z.lazy(() => BookOptionalDefaultsWithRelationsSchema),
}))

// BOOK AUTHOR PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type BookAuthorPartialRelations = {
  author?: AuthorPartialWithRelations;
  book?: BookPartialWithRelations;
};

export type BookAuthorPartialWithRelations = z.infer<typeof BookAuthorPartialSchema> & BookAuthorPartialRelations

export const BookAuthorPartialWithRelationsSchema: z.ZodType<BookAuthorPartialWithRelations> = BookAuthorPartialSchema.merge(z.object({
  author: z.lazy(() => AuthorPartialWithRelationsSchema),
  book: z.lazy(() => BookPartialWithRelationsSchema),
})).partial()

export type BookAuthorOptionalDefaultsWithPartialRelations = z.infer<typeof BookAuthorOptionalDefaultsSchema> & BookAuthorPartialRelations

export const BookAuthorOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BookAuthorOptionalDefaultsWithPartialRelations> = BookAuthorOptionalDefaultsSchema.merge(z.object({
  author: z.lazy(() => AuthorPartialWithRelationsSchema),
  book: z.lazy(() => BookPartialWithRelationsSchema),
}).partial())

export type BookAuthorWithPartialRelations = z.infer<typeof BookAuthorSchema> & BookAuthorPartialRelations

export const BookAuthorWithPartialRelationsSchema: z.ZodType<BookAuthorWithPartialRelations> = BookAuthorSchema.merge(z.object({
  author: z.lazy(() => AuthorPartialWithRelationsSchema),
  book: z.lazy(() => BookPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.number().int(),
  comment: z.string({ invalid_type_error: "文字を入力してください"}).min(1, { message: "必須です" }),
  bookId: z.number().int(),
})

export type Review = z.infer<typeof ReviewSchema>

/////////////////////////////////////////
// REVIEW PARTIAL SCHEMA
/////////////////////////////////////////

export const ReviewPartialSchema = ReviewSchema.partial()

export type ReviewPartial = z.infer<typeof ReviewPartialSchema>

// REVIEW OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ReviewOptionalDefaultsSchema = ReviewSchema.merge(z.object({
  id: z.number().int().optional(),
}))

export type ReviewOptionalDefaults = z.infer<typeof ReviewOptionalDefaultsSchema>

// REVIEW RELATION SCHEMA
//------------------------------------------------------

export type ReviewRelations = {
  book: BookWithRelations;
};

export type ReviewWithRelations = z.infer<typeof ReviewSchema> & ReviewRelations

export const ReviewWithRelationsSchema: z.ZodType<ReviewWithRelations> = ReviewSchema.merge(z.object({
  book: z.lazy(() => BookWithRelationsSchema),
}))

// REVIEW OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type ReviewOptionalDefaultsRelations = {
  book: BookOptionalDefaultsWithRelations;
};

export type ReviewOptionalDefaultsWithRelations = z.infer<typeof ReviewOptionalDefaultsSchema> & ReviewOptionalDefaultsRelations

export const ReviewOptionalDefaultsWithRelationsSchema: z.ZodType<ReviewOptionalDefaultsWithRelations> = ReviewOptionalDefaultsSchema.merge(z.object({
  book: z.lazy(() => BookOptionalDefaultsWithRelationsSchema),
}))

// REVIEW PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ReviewPartialRelations = {
  book?: BookPartialWithRelations;
};

export type ReviewPartialWithRelations = z.infer<typeof ReviewPartialSchema> & ReviewPartialRelations

export const ReviewPartialWithRelationsSchema: z.ZodType<ReviewPartialWithRelations> = ReviewPartialSchema.merge(z.object({
  book: z.lazy(() => BookPartialWithRelationsSchema),
})).partial()

export type ReviewOptionalDefaultsWithPartialRelations = z.infer<typeof ReviewOptionalDefaultsSchema> & ReviewPartialRelations

export const ReviewOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ReviewOptionalDefaultsWithPartialRelations> = ReviewOptionalDefaultsSchema.merge(z.object({
  book: z.lazy(() => BookPartialWithRelationsSchema),
}).partial())

export type ReviewWithPartialRelations = z.infer<typeof ReviewSchema> & ReviewPartialRelations

export const ReviewWithPartialRelationsSchema: z.ZodType<ReviewWithPartialRelations> = ReviewSchema.merge(z.object({
  book: z.lazy(() => BookPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// HOGE SCHEMA
/////////////////////////////////////////

export const HogeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type Hoge = z.infer<typeof HogeSchema>

/////////////////////////////////////////
// HOGE PARTIAL SCHEMA
/////////////////////////////////////////

export const HogePartialSchema = HogeSchema.partial()

export type HogePartial = z.infer<typeof HogePartialSchema>

// HOGE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const HogeOptionalDefaultsSchema = HogeSchema.merge(z.object({
  id: z.number().int().optional(),
}))

export type HogeOptionalDefaults = z.infer<typeof HogeOptionalDefaultsSchema>
