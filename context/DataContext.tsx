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

const loadCount = 4;

type SizeProps = {
  width?: number | string | undefined;
  height?: number | string | undefined;
};

type CardProps = SizeProps & {
  id?: number;
  name?: string;
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
  title?: string;
  content?: string;
  imgUrl?: string;
  tags: Array<string>;
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
    label: "❤ 쉬움",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 11,
    label: "❤ 보통",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 12,
    label: "❤ 어려움",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 13,
    label: "❤ 전문가",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 14,
    label: "❤ 이거 가능?",
    backgroundColor: "#FBD2DD",
    category: "난이도",
    isSelected: false,
  },
  {
    chipId: 15,
    backgroundColor: "#BB92DF",
    label: "♂ 남성 리드",
    category: "형태",
    isSelected: false,
  },
  {
    chipId: 16,
    backgroundColor: "#F3B4C5",
    label: "♀ 여성 리드",
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
  count: 0,
  card: cards[0],
  toggledIndex: 0,
  set: "",
};

export const setData: Array<SetProps> = [
  {
    title: "강아지 산책",
    content:
      "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
    tags: ["TEST 3,4", "TEST All"],
    imgUrl: "/assets/set1.png",
  },
  {
    title: "기분이 울적할 때",
    content:
      "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
    tags: ["TEST 3,4", "TEST All"],
    imgUrl: "/assets/set2.png",
  },
  {
    title: "고양이처럼",
    content:
      "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
    tags: ["TEST 3,4", "TEST All"],
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
  count: number
) {
  if (tags.length == 1 && tags[0] == 0) {
    var result = cards.filter(
      (item) => title == "" || item.name?.includes(title)
    );

    update(result);
  } else {
    var result = cards
      .filter((item) => title == "" || item.name?.includes(title))
      .filter((item) => tags.every((tag) => item.tags?.includes(tag)));
    update(result);
  }
}

function searchSets(
  update: React.Dispatch<React.SetStateAction<SetProps[]>>,
  title: string,
  tags: Array<string>,
  count: number
) {
  if (tags.length == 0) {
    update(
      setData.filter((item) => item.title?.includes(title)).slice(0, count)
    );
  } else {
    update(
      setData
        .filter((item) => item.title?.includes(title))
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
  const selectedContext = useSearchDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  return dataContext.state;
}

export function useSetDataState() {
  const dataContext = useSetDataContext();
  const selectedContext = useSearchDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  if (selectedContext.state.count == 0) {
    selectedContext.update({
      ...selectedContext.state,
      count: loadCount,
    });

    searchSets(dataContext.update, selectedContext.state.title, [], loadCount);
  }

  return dataContext;
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
  const selectedContext = useSearchDataContext();

  if (tagContext === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }

  const updateIsSelected = (id: number) => {
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
      selectedContext.update({
        ...selectedContext.state,
        tags: selectedTags,
      });
      search(
        dataContext.update,
        selectedContext.state.title,
        selectedTags,
        selectedContext.state.count
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

    selectedContext.update({
      ...selectedContext.state,
      tags: [0],
    });

    search(
      dataContext.update,
      selectedContext.state.title,
      [],
      selectedContext.state.count
    );
  };

  return { updateIsSelected, initializeTag };
}

export function useSearchAction() {
  const dataContext = useCardDataContext();
  const selectedContext = useSearchDataContext();

  const searchAction = (value: string) => {
    selectedContext.update({ ...selectedContext.state, title: value });
    search(
      dataContext.update,
      value,
      selectedContext.state.tags,
      selectedContext.state.count
    );
  };

  const addSearchCountAction = () => {
    const newCount = Math.min(
      selectedContext.state.count + loadCount,
      cards.length
    );

    selectedContext.update({
      ...selectedContext.state,
      count: newCount,
    });
    search(
      dataContext.update,
      selectedContext.state.title,
      selectedContext.state.tags,
      newCount
    );
  };

  return { searchAction, addSearchCountAction };
}

export function useSelectedData(id: number) {
  const dataContext = useDataContext();
  var data = dataContext.state.find((value) => value.id == id);
  if (data) {
    return data;
  } else {
    null;
  }
}
