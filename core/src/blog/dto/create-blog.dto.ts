import * as JOI from 'joi';

export interface CreateBlogDto {
  title: string;
  subtitle: string;
  userId: string;
  content: string;
}

export const CreateBlogDtoSchema = JOI.object({
  title: JOI.string().required(),
  userId: JOI.string().required(),
  subtitle: JOI.string().required(),
  content: JOI.string().required(),
});
