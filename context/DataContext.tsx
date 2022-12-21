import React, {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Dispatch } from "react";

const loadCount = 4;

type SizeProps = {
  width: number | string | undefined;
  height: number | string | undefined;
};

type CardProps = SizeProps & {
  number?: number;
  title?: string;
  imgUrl?: string;
  tags: Array<string>;
};

type ChipProps = {
  number: number;
  backgroundColor?: string;
  imgUrl?: string;
  isSelected?: boolean;
  label: string;
  isReadonly?: boolean;
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
    number: 0,
    imgUrl: "/favicon.ico",
    label: "TEST 1",
    isSelected: false,
  },
  {
    number: 1,
    backgroundColor: "purple",
    label: "TEST 2",
    isSelected: false,
  },
  {
    number: 2,
    label: "TEST 3,4",
    isSelected: false,
  },
  {
    number: 3,
    label: "TEST All",
    isSelected: false,
  },
  {
    number: 4,
    label: "Empty tag",
    isSelected: false,
  },
];

export const filteredData = [];

export const data: Array<CardProps> = [
  {
    number: 0,
    title: "TEST 1",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 1", "TEST All"],
  },
  {
    number: 1,
    title: "TEST 2",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 2", "TEST All"],
  },
  {
    number: 2,
    title: "TEST 3",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 3,4", "TEST All"],
  },
  {
    number: 3,
    title: "TEST 4",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 3,4", "TEST All"],
  },
  {
    number: 4,
    title: "TEST 1",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 1", "TEST All"],
  },
  {
    number: 5,
    title: "TEST 2",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 2", "TEST All"],
  },
  {
    number: 6,
    title: "TEST 3",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 3,4", "TEST All"],
  },
  {
    number: 7,
    title: "TEST 4",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 3,4", "TEST All"],
  },
];

export const selectedData = {
  title: "",
  tags: ["TEST All"],
  count: 0,
  card: data[0],
  toggled: false,
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
  tags: Array<string>,
  count: number
) {
  if (tags.length == 0) {
    update(data.filter((item) => item.title?.includes(title)).slice(0, count));
  } else {
    update(
      data
        .filter((item) => item.title?.includes(title))
        .filter((item) => tags.every((tag) => item.tags.includes(tag)))
        .slice(0, count)
    );
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
export const [useSetDataContext, SetDataProvider] =
  createCustomContext(setData);
export const [useTagContext, TagProvider] = createCustomContext(tags);
export const [useSelectedDataContext, SelectedDataProvider] =
  createCustomContext(selectedData);

export function useDataState() {
  const dataContext = useDataContext();
  const selectedContext = useSelectedDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  if (selectedContext.state.count == 0) {
    selectedContext.update({
      ...selectedContext.state,
      count: loadCount,
    });

    search(
      dataContext.update,
      selectedContext.state.title,
      selectedContext.state.tags,
      loadCount
    );
  }

  return dataContext;
}

export function useSetDataState() {
  const dataContext = useSetDataContext();
  const selectedContext = useSelectedDataContext();
  if (dataContext === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }

  if (selectedContext.state.count == 0) {
    selectedContext.update({
      ...selectedContext.state,
      count: loadCount,
    });

    searchSets(
      dataContext.update,
      selectedContext.state.title,
      selectedContext.state.tags,
      loadCount
    );
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

export function useSelectedDataState() {
  const value = useSelectedDataContext();
  if (value === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }
  return value.state;
}

export function useTagActions() {
  const value = useTagContext();
  const dataContext = useDataContext();
  const selectedContext = useSelectedDataContext();

  if (value === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }

  const updateIsSelected = (id: number) => {
    const newValue = JSON.parse(
      JSON.stringify(value.state)
    ) as Array<ChipProps>;
    const tag = newValue.find((item) => item.number == id);
    if (tag) {
      tag.isSelected = !tag.isSelected;
      value.update(newValue);
      const selectedTags = newValue
        .filter((item) => item.isSelected)
        .map((item) => item.label);
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

  return { updateIsSelected };
}

export function useSearchAction() {
  const dataContext = useDataContext();
  const selectedContext = useSelectedDataContext();

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
      data.length
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
