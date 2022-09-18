export default function convertAttackArray({ special }) {
  return special.map((attack) => {
    /*
      из за бессысленных ограничений линтера
      приходится городить такие конструкции(
    */
    const element = attack;
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
      element.description = 'Описание недоступно';
    }
    return element;
  });
}
