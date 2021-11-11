import { PageHeader, Card } from 'antd';

export const Space = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="졸업전시회 워크스페이스"
      subTitle="졸업전시회 관리를 위한 도구가 모여있는 워크스페이스입니다."
    >
      <Card
        type="inner"
        title="졸업전시회 작품 관리"
        extra={<a href="/workspace/watch">들어가기</a>}
      >
        홈페이지 내 업로드 된 졸업전시회 작품을 관리할 수 있는 도구입니다.
      </Card>
    </PageHeader>
  );
};
