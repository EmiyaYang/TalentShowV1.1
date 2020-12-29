import moment from "moment";

export function timeFormat(value: any, template = "YYYY-MM-DD HH:mm") {
  return moment(value).format(template);
}

export const toOptions = (
  arr: any[] | undefined,
  labelKey = "name",
  valKey = "id"
): Option[] => {
  if (!arr || !Array.isArray(arr)) return [];

  return arr.map((item) => ({
    label: item[labelKey],
    value: item[valKey],
  }));
};
