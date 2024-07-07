import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import {
  Flex,
  DatePicker,
  Switch,
  Input,
  Button,
  message,
} from "antd";
import ImageUpload from "../../components/ImageUpload";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const BannerDetail = () => {
  const { id } = useParams();
  const isCreate = id === "create";
  const [formData, setFormData] = useState({
    bannerImg: "",
    mobileBannerImg: "",
    visible: false,
    startDate: undefined,
    endDate: undefined,
    title: "",
    content: "",
  });

  const onChangeForm = (name, value) =>
    setFormData({ ...formData, [name]: value });

  const onSubmit = () => {
    const {
      bannerImg,
      mobileBannerImg,
      visible,
      startDate,
      endDate,
      title,
      content,
    } = formData;
    if (!bannerImg)
      return message.error("배너 이미지를 등록해주세요.");
    if (!mobileBannerImg)
      return message.error("모바일 배너 이미지를 등록해주세요.");
    if (!startDate)
      return message.error("배너 시작일자를 선택해주세요.");
    if (!endDate)
      return message.error("배너 종료일자를 선택해주세요.");
    if (!title) return message.error("배너 제목을 입력해주세요.");
    if (!content) return message.error("배너 내용을 입력해주세요..");

    console.log("FORMDATA", formData);
  };

  return (
    <article>
      <PageTitle
        title={isCreate ? "배너 등록하기" : "배너 수정하기"}
      />
      <div>
        <Flex vertical align="start" gap={30}>
          <Flex style={{ width: "100%" }} justify="space-between">
            <section className="pc-banner">
              <label>배너 이미지</label>
              <ImageUpload
                image={formData.bannerImg}
                handleImage={(value) =>
                  onChangeForm("bannerImg", value)
                }
                width={432}
                height={200}
              />
            </section>
            <section className="mobile-banner">
              <label>모바일 배너 이미지</label>
              <ImageUpload
                image={formData.mobileBannerImg}
                handleImage={(value) =>
                  onChangeForm("mobileBannerImg", value)
                }
                width={432}
                height={200}
              />
            </section>
          </Flex>
          <section>
            <label>배너 노출여부</label>
            <Switch
              onChange={(value) => onChangeForm("visible", value)}
              checked={formData.visible}
            />
          </section>

          <Flex gap={10} align="center">
            <section>
              <label>배너 시작날짜</label>
              <DatePicker
                format={"YYYY.MM.DD HH:mm"}
                value={formData.startDate}
                onOk={(value) => onChangeForm("startDate", value)}
                onChange={(value) => onChangeForm("startDate", value)}
                showTime={{
                  minuteStep: 30,
                }}
              />
            </section>

            <section>
              <label style={{ opacity: 0 }}>~</label>
              <p style={{ margin: 0 }}>~</p>
            </section>

            <section>
              <label>배너 종료날짜</label>
              <DatePicker
                format={"YYYY.MM.DD HH:mm"}
                value={formData.endDate}
                onOk={(value) => onChangeForm("endDate", value)}
                onChange={(value) => onChangeForm("endDate", value)}
                showTime={{
                  minuteStep: 30,
                }}
              />
            </section>
          </Flex>

          <section style={{ width: "100%" }}>
            <label>배너 제목</label>
            <Input
              value={formData.title}
              name="title"
              onChange={(e) => onChangeForm("title", e.target.value)}
              placeholder="배너 제목을 입력해주세요"
            />
          </section>

          <section style={{ width: "100%" }}>
            <label>배너 내용</label>
            <TextArea
              value={formData.content}
              name="content"
              onChange={(e) =>
                onChangeForm("content", e.target.value)
              }
              placeholder="배너 내용를 입력해주세요"
            />
          </section>

          <Button
            htmlType="submit"
            size="large"
            type="primary"
            style={{ width: "100%" }}
            onClick={onSubmit}
          >
            {isCreate ? "배너 등록하기" : "배너 수정하기"}
          </Button>
        </Flex>
      </div>
    </article>
  );
};

export default BannerDetail;
