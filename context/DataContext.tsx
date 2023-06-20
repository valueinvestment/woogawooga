import React, { createContext, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { Dispatch } from "react";
import detailData from "./detailData.json";
import tagJson from "./tags.json";
import setJson from "./setData.json";

const loadCount = 8;

type SizeProps = {
  width?: number | string | undefined;
  height?: number | string | undefined;
};

type TagProps = {
  id?: number;
  name?: string;
  detail?: Array<number>;
  set?: Array<number>;
};

type ChipProps = {
  chipId: number;
  backgroundColor?: string;
  imgUrl?: string;
  isSelected?: boolean;
  label: string;
  isReadonly?: boolean;
  category?: string;
};

type SetProps = {
  id?: number;
  name?: string;
  subTitle?: Array<string> | null;
  tags?: Array<number>;
  details?: Array<number>;
  tips?: Array<string> | null;
  난이도?: string;
  쾌감도?: number;
  "리드(남)"?: number;
};

type DetailProps = {
  id?: number;
  order?: number;
  type?: number;
  code?: number;
  name?: string;
  tags?: Array<number>;
  "상체힘(남)"?: number;
  "상체힘(여)"?: number;
  "하체힘(남)"?: number;
  "하체힘(여)"?: number;
  "균형감각(남)"?: number;
  "균형감각(여)"?: number;
  "유연성(남)"?: number;
  "유연성(여)"?: number;
  "무게부담(남)"?: number;
  "무게부담(여)"?: number;
  "난이도(남)"?: number;
  "난이도(여)"?: number;
  종합난이도?: number;
  details?: Array<string>;
};

export type { DetailProps, SizeProps, ChipProps, SetProps };

export const tags: Array<ChipProps> = [
  {
    chipId: 1,
    label: "# 정상위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 2,
    label: "# 후배위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 3,
    label: "# 기승위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 4,
    label: "# 좌위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 5,
    label: "# 입위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 6,
    label: "# 측위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 7,
    label: "# 굴곡위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 8,
    label: "# 반전체위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 9,
    label: "# 교차위",
    backgroundColor: "#C6D6FE",
    category: "체위 유형",
    isSelected: false,
  },
  {
    chipId: 10,
    imgUrl: "/assets/icon/heart.png",
    label: "쉬움",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 11,
    imgUrl: "/assets/icon/heart.png",
    label: "보통",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 12,
    imgUrl: "/assets/icon/heart.png",
    label: "어려움",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 13,
    imgUrl: "/assets/icon/heart.png",
    label: "전문가",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 14,
    imgUrl: "/assets/icon/heart.png",
    label: "이거 가능?",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 15,
    backgroundColor: "#BB92DF",
    imgUrl: "/assets/icon/man.png",
    label: "남성 리드",
    category: "형태",
    isSelected: false,
  },
  {
    chipId: 16,
    backgroundColor: "#F3B4C5",
    imgUrl: "/assets/icon/woman.png",
    label: "여성 리드",
    category: "형태",
    isSelected: false,
  },
  {
    chipId: 17,
    imgUrl: "/favicon.ico",
    backgroundColor: "#F6C9F4",
    label: "상호 리드",
    category: "형태",
    isSelected: false,
  },
  {
    chipId: 18,
    imgUrl: "/favicon.ico",
    backgroundColor: "#F6C9F4",
    label: "키스 가능",
    category: "형태",
    isSelected: false,
  },
  {
    chipId: 19,
    imgUrl: "/favicon.ico",
    backgroundColor: "#F6C9F4",
    label: "아크로바틱",
    category: "형태",
    isSelected: false,
  },
  {
    chipId: 20,
    backgroundColor: "#DADADA",
    label: "# 책상",
    category: "장소/소품",
    isSelected: false,
  },
  {
    chipId: 21,
    backgroundColor: "#DADADA",
    label: "# 침대",
    category: "장소/소품",
    isSelected: false,
  },
  {
    chipId: 22,
    backgroundColor: "#DADADA",
    label: "# 의자",
    category: "장소/소품",
    isSelected: false,
  },
  {
    chipId: 23,
    backgroundColor: "#DADADA",
    label: "# 벽",
    category: "장소/소품",
    isSelected: false,
  },
];

export const data: Array<DetailProps> = detailData;

export const filteredData = [];

export const tagData: Array<TagProps> = tagJson;

export const searchData = {
  title: "",
  tags: [0],
  count: 8,
  type: [0, 1],
  toggledIndex: 1,
};

export const setData: Array<SetProps> = setJson;

function createCustomContext<T>(defaultValue: T) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const context = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function useCustomContext() {
    const customContext = useContext(context);
    if (customContext === undefined) {
      throw new Error("useCtx must be inside a Provider with a value");
    }
    return customContext;
  }

  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <context.Provider value={{ state, update }} {...props} />;
  }
  return [useCustomContext, Provider] as const;
}

function search(update: React.Dispatch<React.SetStateAction<DetailProps[]>>, title: string, tags: Array<number>, types: Array<number>, count: number) {
  if (tags.length == 1 && tags[0] == 0) {
    var result = data
      //  .filter((item) => title == "" || item.name?.includes(title))
      // .filter((item) => tags.every((tag) => item.tags.includes(tag)))
      .filter((item) => types.includes(item.type ?? -1));
    update(result);
  } else {
    var result = data
      //  .filter((item) => title == "" || item.name?.includes(title))
      .filter((item) => tags.every((tag) => item.tags?.includes(tag)))
      .filter((item) => types.includes(item.type ?? -1));
    update(result);
  }
}

function searchSets(update: React.Dispatch<React.SetStateAction<SetProps[]>>, title: string, tags: Array<number>, count: number) {
  if (tags.length == 1 && tags[0] == 0) {
    update(setData.slice(0, count));
  } else {
    update(setData.filter((item) => tags.every((tag) => item.tags?.includes(tag))).slice(0, count));
  }
}

export const [useDataContext, DataProvider] = createCustomContext(data);
export const [useSetDataContext, SetDataProvider] = createCustomContext(setData);
export const [useTagContext, TagProvider] = createCustomContext(tags);
export const [useSearchDataContext, SearchDataProvider] = createCustomContext(searchData);

export function useDataState() {
  const dataContext = useDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  return dataContext.state;
}

export function useSetDataState() {
  const dataContext = useSetDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  return dataContext.state;
}

export function useTagState() {
  const value = useTagContext();
  if (value === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }
  return value.state;
}

export function useSearchDataState() {
  const value = useSearchDataContext();
  if (value === undefined) {
    throw new Error("useSearchDataState should be used within SearchProvider");
  }
  return value.state;
}

export function useTagActions() {
  const tagContext = useTagContext();
  const dataContext = useDataContext();
  const setContext = useSetDataContext();
  const searchContext = useSearchDataContext();
  const searchDataContext = useSearchDataContext();

  if (tagContext === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }

  const updateTagSelected = (id: number) => {
    const newValue = JSON.parse(JSON.stringify(tagContext.state)) as Array<ChipProps>;
    const tag = newValue.find((item) => item.chipId == id);
    if (tag) {
      tag.isSelected = !tag.isSelected;
      tagContext.update(newValue);
      const selectedTags = newValue.filter((item) => item.isSelected).map((item) => item.chipId);
      searchContext.update({
        ...searchContext.state,
        tags: selectedTags,
      });
      search(dataContext.update, searchContext.state.title, selectedTags, searchContext.state.type, searchContext.state.count);
      searchSets(setContext.update, searchContext.state.title, selectedTags, searchContext.state.count);
    } else {
      throw new Error("tag key dosen't exist");
    }
  };

  const initializeTag = () => {
    tagContext.update(
      tagContext.state.map((item) => {
        item.isSelected = false;
        return item;
      })
    );

    searchContext.update({
      ...searchContext.state,
      tags: [0],
    });

    searchDataContext.update({
      ...searchDataContext.state,
      count: loadCount,
    });

    search(dataContext.update, searchContext.state.title, [], searchContext.state.type, loadCount);
    searchSets(setContext.update, searchContext.state.title, [], loadCount);
  };

  return { updateTagSelected, initializeTag };
}

export function useSearchAction() {
  const dataContext = useDataContext();
  const searchDataContext = useSearchDataContext();
  const setContext = useSetDataContext();

  const searchAction = (value: string) => {
    searchDataContext.update({
      ...searchDataContext.state,
      title: value,
      count: loadCount,
    });

    search(dataContext.update, value, searchDataContext.state.tags, searchDataContext.state.type, loadCount);
    searchSets(setContext.update, searchDataContext.state.title, searchDataContext.state.tags, loadCount);
  };

  const addSearchCountAction = () => {
    const newCount = Math.min(searchDataContext.state.count + loadCount, data.length);

    searchDataContext.update({
      ...searchDataContext.state,
      count: newCount,
    });

    search(dataContext.update, searchDataContext.state.title, searchDataContext.state.tags, searchDataContext.state.type, newCount);
    searchSets(setContext.update, searchDataContext.state.title, searchDataContext.state.tags, newCount);
  };

  const changeSearchTypeAction = (value: number) => {
    var newType = [...searchDataContext.state.type];
    newType.includes(value) ? newType.splice(newType.indexOf(value), 1) : newType.push(value);
    searchDataContext.update({
      ...searchDataContext.state,
      type: newType,
    });

    search(dataContext.update, searchDataContext.state.title, searchDataContext.state.tags, newType, searchDataContext.state.count);
    searchSets(setContext.update, searchDataContext.state.title, searchDataContext.state.tags, searchDataContext.state.count);
  };

  return { searchAction, addSearchCountAction, changeSearchTypeAction };
}

export function useSelectedAction() {
  const dataContext = useDataContext();
  const getSelectedData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    if (data) {
      return data;
    } else {
      null;
    }
  };

  const getPreviousData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    var prev = dataContext.state.find((value) => value.order == (data?.order ?? 0) - 1);

    return prev ?? data;
  };

  const getNextData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    var next = dataContext.state.find((value) => value.order == (data?.order ?? 0) + 1);

    return next ?? data;
  };

  return { getSelectedData, getPreviousData, getNextData };
}

export function useSelectedSetAction() {
  const dataContext = useSetDataContext();
  const getSelectedSetData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    if (data) {
      return data;
    } else {
      null;
    }
  };

  const getPreviousSetData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    var prev = dataContext.state.find((value) => value.id == (id ?? 0) - 1);
    return prev ?? data;
  };

  const getNextSetData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    var next = dataContext.state.find((value) => value.id == (id ?? 0) + 1);
    return next ?? data;
  };

  return { getSelectedSetData, getPreviousSetData, getNextSetData };
}
