import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class StudentModel extends Model {
  @attr('string') name;
  @attr('string') dateOfBirth;
  @attr('string') studentClass;
  @attr('number') year;
  @attr('string') quarter;
  @attr('number') mathGrade;
  @attr('number') computerScienceGrade;
  @attr('number') literatureGrade;
}
