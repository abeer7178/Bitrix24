<?php

namespace Bitrix\Crm\Service\Timeline\Item\LogMessage;

use Bitrix\Crm\Service\Timeline\Item\LogMessage;
use Bitrix\Crm\Service\Timeline\Layout\Body\ContentBlock\Text;
use Bitrix\Crm\Service\Timeline\Layout\Common\Icon;
use Bitrix\Crm\Service\Timeline\Layout\Header\Tag;
use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__DIR__ . '/../Ecommerce.php');

class ProductCompilationNotViewed extends LogMessage
{
	public function getType(): string
	{
		return 'ProductCompilationNotViewed';
	}

	public function getTitle(): ?string
	{
		return Loc::getMessage('CRM_TIMELINE_ECOMMERCE_PRODUCT_SELECTION');
	}

	public function getContentBlocks(): ?array
	{
		return [
			'content' =>
				(new Text())
					->setValue(Loc::getMessage('CRM_TIMELINE_ECOMMERCE_CUSTOMER_NOT_OPENED_PRODUCT_SELECTION_YET'))
					->setColor(Text::COLOR_BASE_90)
			,
		];
	}

	public function getTags(): ?array
	{
		return [
			'status' => new Tag(
				Loc::getMessage('CRM_TIMELINE_ECOMMERCE_NOT_VIEWED_IN_FEMALE_GENDER'),
				Tag::TYPE_SECONDARY
			),
		];
	}

	public function getIconCode(): ?string
	{
		return Icon::VIEW;
	}
}
