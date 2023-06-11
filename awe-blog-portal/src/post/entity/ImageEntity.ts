import { attribute, hashKey, table } from '@aws/dynamodb-data-mapper-annotations';

@table('Images')
export class ImageEntity {
  @hashKey()
  id: string;

  @attribute()
  url: string;
}