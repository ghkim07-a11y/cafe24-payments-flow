import React from 'react'
import { Button } from '@/components/ui/button-design-system/button-component.tsx'
import '@/tokens.css'

/**
 * 서비스 신청 버튼 그룹 컴포넌트
 *
 * 이미지 기반으로 생성된 Cafe24 디자인 시스템 준수 컴포넌트
 * - 이전 버튼 (outline variant)
 * - 본인 인증 후 서비스 신청하기 버튼 (primary variant)
 */
const ServiceApplicationButtons: React.FC = () => {
  const handlePrevious = () => {
    // 이전 페이지로 이동 로직
    console.log('이전 버튼 클릭')
  }

  const handleSubmit = () => {
    // 본인 인증 및 서비스 신청 로직
    console.log('본인 인증 후 서비스 신청하기 버튼 클릭')
  }

  return (
    <div className="flex items-center justify-center gap-3 p-4">
      {/* 이전 버튼 - outline variant */}
      <Button
        variant="outline"
        size="md"
        onClick={handlePrevious}
        className="min-w-[100px]"
      >
        이전
      </Button>

      {/* 본인 인증 후 서비스 신청하기 버튼 - primary variant */}
      <Button
        variant="default"
        size="md"
        onClick={handleSubmit}
        className="min-w-[200px]"
      >
        본인 인증 후 서비스 신청하기
      </Button>
    </div>
  )
}

export default ServiceApplicationButtons
