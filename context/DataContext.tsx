import React, {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Dispatch } from "react";
import detailData from "./detailData.json";
import tagData from "./tags.json";

const loadCount = 8;

type SizeProps = {
  width?: number | string | undefined;
  height?: number | string | undefined;
};

type CardProps = SizeProps & {
  id?: number;
  name?: string;
  type?: number;
  tags?: Array<number>;
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
  contents: Array<string>;
  imgUrl?: string;
  tags: Array<number>;
};

export type { SizeProps, ChipProps, CardProps, SetProps };

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

export const data = detailData;

export const filteredData = [];

export const cards: Array<CardProps> = tagData;

export const searchData = {
  title: "",
  tags: [0],
  count: 8,
  type: [0, 1],
  card: cards[0],
  toggledIndex: 1,
  set: "",
};

export const setData: Array<SetProps> = [
  {
    id: 1,
    name: "강아지 산책",
    contents: [
      "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
    ],
    tags: [2, 1],
    imgUrl: "/assets/set1.png",
  },
  {
    id: 2,
    name: "기분이 울적할 때",
    contents: [
      "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
    ],
    tags: [1],
    imgUrl: "/assets/set2.png",
  },
  {
    id: 3,
    name: "고양이처럼",
    contents: [
      "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
    ],
    tags: [3],
    imgUrl: "/assets/set3.png",
  },
];

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

function search(
  update: React.Dispatch<React.SetStateAction<CardProps[]>>,
  title: string,
  tags: Array<number>,
  types: Array<number>,
  count: number
) {
  if (tags.length == 1 && tags[0] == 0) {
    var result = cards
      .filter((item) => title == "" || item.name?.includes(title))
      .filter((item) => types.includes(item.type ?? -1));
    update(result);
  } else {
    var result = cards
      .filter((item) => title == "" || item.name?.includes(title))
      .filter((item) => tags.every((tag) => item.tags?.includes(tag)))
      .filter((item) => types.includes(item.type ?? -1));
    update(result);
  }
}

function searchSets(
  update: React.Dispatch<React.SetStateAction<SetProps[]>>,
  title: string,
  tags: Array<number>,
  count: number
) {
  if (tags.length == 0) {
    update(
      setData.filter((item) => item.name?.includes(title)).slice(0, count)
    );
  } else {
    update(
      setData
        .filter((item) => item.name?.includes(title))
        .filter((item) => tags.every((tag) => item.tags.includes(tag)))
        .slice(0, count)
    );
  }
}

export const [useDataContext, DataProvider] = createCustomContext(data);
export const [useCardDataContext, CardDataProvider] =
  createCustomContext(cards);
export const [useSetDataContext, SetDataProvider] =
  createCustomContext(setData);
export const [useTagContext, TagProvider] = createCustomContext(tags);
export const [useSearchDataContext, SearchDataProvider] =
  createCustomContext(searchData);

export function useDataState() {
  const dataContext = useCardDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  return dataContext.state;
}

export function useSetDataState() {
  const dataContext = useSetDataContext();
  const searhDataContext = useSearchDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  if (searhDataContext.state.count == 0) {
    searhDataContext.update({
      ...searhDataContext.state,
      count: loadCount,
    });

    searchSets(dataContext.update, searhDataContext.state.title, [], loadCount);
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
  const dataContext = useCardDataContext();
  const searchContext = useSearchDataContext();
  const searchDataContext = useSearchDataContext();

  if (tagContext === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }

  const updateTagSelected = (id: number) => {
    const newValue = JSON.parse(
      JSON.stringify(tagContext.state)
    ) as Array<ChipProps>;
    const tag = newValue.find((item) => item.chipId == id);
    if (tag) {
      tag.isSelected = !tag.isSelected;
      tagContext.update(newValue);
      const selectedTags = newValue
        .filter((item) => item.isSelected)
        .map((item) => item.chipId);
      searchContext.update({
        ...searchContext.state,
        tags: selectedTags,
      });
      search(
        dataContext.update,
        searchContext.state.title,
        selectedTags,
        searchContext.state.type,
        searchContext.state.count
      );
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

    search(
      dataContext.update,
      searchContext.state.title,
      [],
      searchContext.state.type,
      loadCount
    );
  };

  return { updateTagSelected, initializeTag };
}

export function useSearchAction() {
  const dataContext = useCardDataContext();
  const searchDataContext = useSearchDataContext();

  const searchAction = (value: string) => {
    searchDataContext.update({
      ...searchDataContext.state,
      title: value,
      count: loadCount,
    });

    search(
      dataContext.update,
      value,
      searchDataContext.state.tags,
      searchDataContext.state.type,
      loadCount
    );
  };

  const addSearchCountAction = () => {
    const newCount = Math.min(
      searchDataContext.state.count + loadCount,
      cards.length
    );

    searchDataContext.update({
      ...searchDataContext.state,
      count: newCount,
    });

    search(
      dataContext.update,
      searchDataContext.state.title,
      searchDataContext.state.tags,
      searchDataContext.state.type,
      newCount
    );
  };

  const changeSearchTypeAction = (value: number) => {
    var newType = [...searchDataContext.state.type];
    newType.includes(value)
      ? newType.splice(newType.indexOf(value), 1)
      : newType.push(value);
    console.log(newType);
    searchDataContext.update({
      ...searchDataContext.state,
      type: newType,
    });

    search(
      dataContext.update,
      searchDataContext.state.title,
      searchDataContext.state.tags,
      newType,
      searchDataContext.state.count
    );
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
    var prev = dataContext.state.find(
      (value) => value.order == (data?.order ?? 0) - 1
    );

    return prev ?? data;
  };

  const getNextData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    var next = dataContext.state.find(
      (value) => value.order == (data?.order ?? 0) + 1
    );

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
    var prev = dataContext.state.find(
      (value) => value.id == (data?.id ?? 0) - 1
    );

    return prev ?? data;
  };

  const getNextSetData = (id: number) => {
    var data = dataContext.state.find((value) => value.id == id);
    var next = dataContext.state.find(
      (value) => value.id == (data?.id ?? 0) + 1
    );

    return next ?? data;
  };

  return { getSelectedSetData, getPreviousSetData, getNextSetData };
}
