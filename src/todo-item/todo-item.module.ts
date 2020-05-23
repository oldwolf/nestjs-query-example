import { TodoItemDto } from './todo-item.dto';
import { TodoItemEntity } from './todo-item.entity';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      resolvers: [{ DTOClass: TodoItemDto, EntityClass: TodoItemEntity }],
    }),
  ],
})
export class TodoItemModule {}
