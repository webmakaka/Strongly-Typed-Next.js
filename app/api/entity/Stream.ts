import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { User } from 'entity/User';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import { Ref } from 'types/Ref';

@ObjectType({ description: 'Stream embedded post content' })
export class Stream {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  title: string;

  @Field()
  @Property({ required: true })
  description: string;

  @Field()
  @Property({ required: true })
  url: string;

  @Field(() => User)
  @Property({ ref: User, required: true })
  author: Ref<User>;
}

export const StreamModel = getModelForClass(Stream);
