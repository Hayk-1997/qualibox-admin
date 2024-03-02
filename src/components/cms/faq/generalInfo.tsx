import { Fragment, useEffect, useState } from "react";
import { Col, Row, Form, Spin, Input, InputNumber, Button, Table } from "antd";
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import GeneralInfoHeader from "./generalInfoHeader"
import { useAppSelector } from "@hooks/useAppSelector";
import { getIsSaving, getFAQ, saveFAQHeader } from "@store/slices/faqsSlice";
import { isFormChanged } from "@utils/form.utils";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { API_URLS, BASE_URL } from "@constants/api.constants";
import { API_URL_ID_REGEX, API_URL_ID_STRING } from "@constants/common.constants";
import ApiInstance from "@services/axios";
import Methods from "@enums/api.enums";
import { IFAQ } from "@types/FAQ";
import GeneralInfoDetails from "./generalInfoDetails";

interface Props {
	onTabChange?: () => void
}

const GeneralInfo = ({ onTabChange }: Props): JSX.Element => {
	return (
		<Fragment>
			<Row gutter={[16, 0]}>
				<Col span={24}>
					<div className="section-wrapper">
						<div className="section-content">
							<Spin spinning={false} wrapperClassName="form-spin">
								<Row style={{ width: "100%" }}>
									<Col flex={"0 0 100%"}>
										<GeneralInfoHeader />
									</Col>
								</Row>
								<Row style={{ width: "100%" }}>
									<Col flex={"0 0 100%"}>
										<GeneralInfoDetails />
									</Col>
								</Row>
							</Spin>
						</div>
					</div>
				</Col>
			</Row>
		</Fragment>
	)
}
export default GeneralInfo