import { Typography, Input, Button, Space } from 'antd';

export const Auth = () => {
  const { Title } = Typography;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Space
        direction="vertical"
        style={{
          justifyContent: 'center',
        }}
      >
        <Title level={3}>
          홍익대학교 판화과
          <br />
          관리자 페이지
        </Title>
        <Input addonAfter="gmail.com" placeholder="이메일을 입력해주세요." />
        <Button type="primary" block>
          로그인
        </Button>
      </Space>
    </div>
  );
};
