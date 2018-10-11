import parseRule from './parseRule';
import orderRules from './orderRules';

export default function parseRules(rawRules, errorLevels) {
  const parsed = rawRules.map((rule) => parseRule(rule, errorLevels));

  const ordered = orderRules(parsed);

  return ordered;
}
